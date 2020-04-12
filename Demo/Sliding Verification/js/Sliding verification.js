function slidingVerification(selector) {
    this.origin = document.querySelector(selector);
    this.userInput = 0;
    this.randomNum = 0;
    this.createElement();

    this.mainCanvas = this.origin.querySelector(".main-canvas");
    this.pieceCanvas = this.origin.querySelector(".piece-canvas");
    this.sliderContainer = this.origin.querySelector(".sliderContainer");
    this.sliderMask = this.origin.querySelector(".sliderMask");
    this.slider = this.origin.querySelector(".slider");
    this.source = this.origin.querySelector(".source");
    this.refreshBtn = this.origin.querySelector(".refreshIcon");

    this.init();
}

// 创建元素
slidingVerification.prototype.createElement = function() {
    var picDiv = document.createElement("div");

    var mainCanvas = document.createElement("canvas");
    var pieceCanvas = document.createElement("canvas");
    var refreshDiv = document.createElement("div");

    picDiv.className = "pic";

    mainCanvas.className = "main-canvas";
    mainCanvas.width = "300";
    mainCanvas.height = "150";

    pieceCanvas.className = "piece-canvas";
    pieceCanvas.width = "300";
    pieceCanvas.height = "150";

    refreshDiv.className = "refreshIcon";

    picDiv.appendChild(mainCanvas);
    picDiv.appendChild(pieceCanvas);
    picDiv.appendChild(refreshDiv);

    this.origin.appendChild(picDiv);

    var slidercontainerDiv = document.createElement("div");

    var sliderMaskDiv = document.createElement("div");
    var sliderTextSpan = document.createElement("span");

    var sliderDiv = document.createElement("div");

    var sliderIconSpan = document.createElement("span");

    slidercontainerDiv.className = "sliderContainer";

    sliderMaskDiv.className = "sliderMask";
    sliderDiv.className = "slider";
    sliderIconSpan.className = "sliderIcon";

    sliderDiv.appendChild(sliderIconSpan);
    sliderMaskDiv.appendChild(sliderDiv);

    sliderTextSpan.className = "sliderText";
    sliderTextSpan.innerText = "向右滑动滑块填充拼图";

    slidercontainerDiv.appendChild(sliderMaskDiv);
    slidercontainerDiv.appendChild(sliderTextSpan);

    this.origin.appendChild(slidercontainerDiv);

    var sourceImg = document.createElement("img");

    sourceImg.className = "source";
    sourceImg.style.display = "none";
    sourceImg.src = "";

    this.origin.appendChild(sourceImg);
};

// 绘画主体画布
slidingVerification.prototype.drawMain = function() {
    // 随机取位置
    this.randomNum = this.generateRandomNum(50, 250);

    // 获取canvas元素
    var context = this.mainCanvas.getContext("2d");

    context.drawImage(this.source, 0, 0);

    // 画出路径
    context.beginPath();
    context.moveTo(this.randomNum, 75 - 25);
    context.lineTo(this.randomNum - 25, 75 + 25);
    context.lineTo(this.randomNum + 25, 75 + 25);
    context.closePath();

    context.fillStyle = "white";

    context.fill();
};

// 绘画副画布
slidingVerification.prototype.drawPiece = function() {
    // 获取canvas元素
    var context = this.pieceCanvas.getContext("2d");

    context.clearRect(0, 0, 300, 150);

    // 平移变换
    // context.translate(-RandomNum + 25, 0);

    // 画出路径
    context.beginPath();
    context.moveTo(25, 75 - 25);
    context.lineTo(0, 75 + 25);
    context.lineTo(25 + 25, 75 + 25);
    context.closePath();

    context.clip();
    context.drawImage(
        this.source,
        this.randomNum - 25,
        50,
        50,
        50,
        0,
        50,
        50,
        50
    );
};

// 刷新当前验证模块
slidingVerification.prototype.refreshPage = function() {
    var self = this;
    // 清除画布，重新绘画
    var mainContent = self.mainCanvas.getContext("2d");
    var pieceContext = self.pieceCanvas.getContext("2d");
    mainContent.clearRect(0, 0, 300, 150);
    pieceContext.clearRect(0, 0, 300, 150);

    self.source.src =
        "https://i.picsum.photos/id/" +
        self.generateRandomNum(0, 360) +
        "/300/150.jpg";
    self.source.onload = function() {
        self.drawMain();
        self.drawPiece();
    };

    // 设置slider的定位
    self.slider.style.left = 0 + "px";
    self.sliderMask.style.width = 0 + self.w + "px";

    // 移动 piece
    self.pieceCanvas.style.left = 0 + "px";
    this.userInput = 0;

    // 清除样式
    self.normalStatus();
};

// 鼠标按下事件
slidingVerification.prototype.mousedown = function() {
    var self = this;
    this.slider.onmousedown = function(e) {
        if (e.which !== 1) {
            return;
        }

        self.sliderContainer.classList.add("click");

        self.sliderContainer.onmousemove = function(event) {
            var x = event.pageX - this.offsetLeft - e.offsetX;

            // 最小不能小于0  最大不能大于 this.width-this.w
            if (x > self.width - self.w || x < 0) {
                return;
            }

            self.userInput = x;

            // 页面偏移 -父元素左边距离 = 父元素内偏移

            // 设置slider的定位
            self.slider.style.left = x + "px";
            self.sliderMask.style.width = x + self.w + "px";

            // 移动 piece
            self.pieceCanvas.style.left = self.userInput + "px";
        };
    };
};

// 获取在(min.max)范围内的一个随机数
slidingVerification.prototype.generateRandomNum = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

// 验证函数
slidingVerification.prototype.check = function() {
    var self = this;
    self.sliderContainer.onmousemove = null;

    if (Math.abs(self.userInput - (self.randomNum - 25)) < 5) {
        self.successStatus();
        setTimeout(function() {
            alert("验证成功");
        }, 600);
    } else {
        // 重新获取图片
        self.errorStatus();
        setTimeout(function() {
            self.refreshPage();
        }, 600);
    }
};

// 状态函数
slidingVerification.prototype.successStatus = function() {
    this.sliderContainer.classList.remove("click");
    this.sliderContainer.classList.add("success");
};
slidingVerification.prototype.errorStatus = function() {
    this.sliderContainer.classList.remove("click");
    this.sliderContainer.classList.add("error");
};
slidingVerification.prototype.normalStatus = function() {
    this.sliderContainer.classList.remove("click");
    this.sliderContainer.classList.remove("error");
    this.sliderContainer.classList.remove("success");
};

slidingVerification.prototype.init = function() {
    var self = this;
    this.width = parseInt(getComputedStyle(this.origin).width);
    this.w = parseInt(getComputedStyle(this.slider).width);

    this.refreshPage();
    this.mousedown();

    this.slider.onmouseup = function() {
        self.check();
    }
    this.refreshBtn.onclick = function() {
        self.refreshPage();
    };
};
