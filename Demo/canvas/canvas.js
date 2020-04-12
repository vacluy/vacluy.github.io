function draw(id, options) {
  /*
        options = {
            title:{
                text:value,
            },
            xAxis:{
                text:value,
                data:[]
            },
            yAxis:{
                text:value,
                data:[]
            },
            series:{
                type:value,
                color:value,
                data:[]
            }
        },
    */
  this.root = document.querySelector(id);
  this.options = options;
  this.init();
}

draw.prototype.init = function() {
  this.canvasBoxWidth = parseInt(getComputedStyle(this.root).width);
  this.canvasBoxHeight = parseInt(getComputedStyle(this.root).height);

  var canvas = document.createElement("canvas");

  canvas.width = this.canvasBoxWidth;
  canvas.height = this.canvasBoxHeight;
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.className = "myCanvas";

  this.root.appendChild(canvas);

  this.canvas = this.root.querySelector(".myCanvas");

  var ctx = this.canvas.getContext("2d");

  this.x0 = this.canvasBoxWidth - this.canvasBoxWidth * 0.9;
  this.y0 = this.canvasBoxHeight - this.canvasBoxHeight * 0.1;

  ctx.translate(this.x0, this.y0);

  // x, y轴长度
  var xLen = this.canvasBoxWidth - this.canvasBoxWidth * 0.2;
  var yLen = this.canvasBoxHeight - this.canvasBoxHeight * 0.2;

  // 数据长度
  var dataLen = this.options.series.data.length;

  // x,y轴上的坐标间隔
  var pointX = (xLen - this.canvasBoxWidth * 0.01) / dataLen - 1;
  var pointY = (yLen - this.canvasBoxHeight * 0.01) / 4;

  // 数据的最大值
  var yMax = Math.max.apply(Math, this.options.series.data);

  // y轴每百分比所长的长度
  this.yPercent = Math.ceil((yLen - this.canvasBoxHeight * 0.01) / yMax);

  // y轴坐标点数组
  for (var i = 1; i < 5; i++) {
    this.options.yAxis.data.push(Math.floor(yMax * 0.25 * i));
  }

  this.drawX(ctx, xLen, pointX);
  this.drawY(ctx, yLen, pointY);

  // 判断绘画类型
  if (this.options.series.type == "bar") {
    this.drawBar(ctx, xLen, pointX, pointY, yLen);
  } else if (this.options.series.type == "bld") {
    this.drawBLD(ctx, pointX);
  }
};

// 画x轴
draw.prototype.drawX = function(ctx, xLen, pointX) {
  var x;
  var self = this;
  if (this.options.xAxis.text == undefined) {
    x = "x";
  } else {
    x = this.options.xAxis.text;
  }
  ctx.moveTo(0, 0);
  ctx.lineTo(xLen, 0);
  ctx.stroke();

  // 箭头
  ctx.moveTo(xLen, 0);
  ctx.lineTo(xLen, this.canvasBoxHeight * 0.01);
  ctx.lineTo(xLen + this.canvasBoxWidth * 0.01, 0);
  ctx.lineTo(xLen, -this.canvasBoxHeight * 0.01);
  ctx.fill();

  ctx.font = "18px Arial";
  ctx.fillText(
    x,
    xLen + this.canvasBoxWidth * 0.02,
    this.canvasBoxHeight * 0.02
  );

  var spacingX = 0;
  var len = this.canvasBoxHeight * 0.01;

  var timeX = setInterval(function() {
    spacingX += pointX;
    ctx.moveTo(spacingX, 0);
    ctx.lineTo(spacingX, -len);
    ctx.stroke();

    if (spacingX >= xLen - (pointX + self.canvasBoxWidth * 0.01)) {
      clearInterval(timeX);
    }
  }, 0);

  var spacing = 0.2 * pointX;
  this.options.xAxis.data.forEach(function(element, index) {
    ctx.font = "14px Arial";
    ctx.fillText(
      element,
      spacing + pointX * index,
      self.canvasBoxHeight * 0.05
    );
  });
};

// 画y轴
draw.prototype.drawY = function(ctx, yLen, pointY) {
  var y;
  var self = this;
  if (this.options.yAxis.text == undefined) {
    y = "y";
  } else {
    y = this.options.yAxis.text;
  }
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -yLen);
  ctx.stroke();

  // 箭头
  ctx.moveTo(0, -yLen);
  ctx.lineTo(this.canvasBoxWidth * 0.01, -yLen);
  ctx.lineTo(0, -(yLen + this.canvasBoxHeight * 0.01));
  ctx.lineTo(-this.canvasBoxWidth * 0.01, -yLen);
  ctx.fill();

  ctx.font = "18px Arial";
  ctx.fillText(
    y,
    -this.canvasBoxWidth * 0.02,
    -(yLen + this.canvasBoxHeight * 0.02)
  );

  var spacingY = 0;
  var len = this.canvasBoxHeight * 0.01;

  var timeY = setInterval(function() {
    spacingY += pointY;
    ctx.moveTo(0, -spacingY);
    ctx.lineTo(len, -spacingY);
    ctx.stroke();

    if (spacingY >= yLen - this.canvasBoxHeight * 0.01) {
      clearInterval(timeY);
    }
  }, 0);

  var spacing = 0.3 * pointY;
  this.options.yAxis.data.forEach(function(element, index) {
    ctx.font = "14px Arial";
    ctx.fillText(element, -spacing, -(pointY * (index + 1)));
  });
};

// 条形图辅助线
draw.prototype.drawGuide = function(ctx, xLen, pointY, yLen) {
  var lineY = 0,
    len = this.canvasBoxHeight * 0.01;
  var self = this;

  var timeLine = setInterval(function() {
    lineY += pointY;
    // ctx.strokeStyle='rgb(221, 221, 221)';
    ctx.moveTo(len + self.canvasBoxWidth * 0.01, -lineY);
    ctx.lineTo(xLen, -lineY);
    ctx.stroke();

    if (lineY >= yLen - self.canvasBoxHeight * 0.01) {
      clearInterval(timeLine);
    }
  });
};

// 条形图
draw.prototype.drawBar = function(ctx, xLen, pointX, pointY, yLen) {
  var self = this;

  var rectWidth = 0.8 * pointX;
  // 保存定时器序号的数组
  var timers = [];

  var spacing = 0.1 * pointX;
  this.options.series.data.forEach(function(element, index) {
    var n = 0;
    var timer = setInterval(function() {
      n += 10;
      ctx.fillStyle = self.options.series.color;
      ctx.fillRect(
        pointX * (index + 1) - spacing,
        0,
        -rectWidth,
        -((self.yPercent * element) / 100) * n
      );
      if (n >= 100) {
        // 清除所有的定时器
        for (var i = 0; i < timers.length; i++) {
          clearInterval(timers[i]);
        }
        timers = [];
      }
    }, 30);
    timers.push(timer);
  });

  this.drawGuide(ctx, xLen, pointY, yLen);
};

// 折线图
draw.prototype.drawBLD = function(ctx, pointX) {
  var firstPoint = (1 / 2) * pointX;
  ctx.strokeStyle = this.options.series.color;

  ctx.moveTo(firstPoint, -(this.yPercent * this.options.series.data[0]));

  for (var i = 1; i < this.options.series.data.length; i++) {
    ctx.lineTo(
      firstPoint + pointX * i,
      -(this.yPercent * this.options.series.data[i])
    );
  }
  ctx.stroke();
};
