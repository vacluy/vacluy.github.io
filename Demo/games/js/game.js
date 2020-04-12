function game(max, stage) {
    // max 为每行每列最大碎片数
    // obj 游戏区域对象
    this.max = max;
    this.stage = document.querySelector(stage);
    this.obj = this.stage.querySelector(".box");
    this.len = Math.pow(this.max, 2);
    this.maxWidth = parseInt(getComputedStyle(this.obj).width) / this.max;
    this.maxHeight = parseInt(getComputedStyle(this.obj).height) / this.max;
    this.btn = this.stage.querySelector(".btn");
    this.cells = [];
    this.cellsCopy = [];
    this.randomArr = [];
    this.firstPosition = [];
    this.init();
}

//创建元素
game.prototype.creatElement = function() {
    for (var i = 0; i < this.len; i++) {
        var div = document.createElement("div");
        div.style.width = this.maxWidth + "px";
        div.style.height = this.maxHeight + "px";
        this.cells.push(div);
    }

    for (var i = 0; i < this.max; i++) {
        for (var j = 0; j < this.max; j++) {
            this.cells[this.max * i + j].style.backgroundPosition =
                -j * this.maxWidth + "px " + -i * this.maxHeight + "px";
        }
    }

    for (var i = 0; i < this.cells.length; i++) {
        this.firstPosition.push(this.cells[i].style.backgroundPosition);
    }
};

// 默认初始化容器
game.prototype.initCell = function() {
    var self = this;
    var eles = this.obj.querySelectorAll("div");
    eles.forEach(function(element) {
        self.obj.removeChild(element);
    });
    for (var i = 0; i < this.cells.length; i++) {
        this.obj.appendChild(this.cells[i]);
    }
};

//打乱碎片,并渲染到容器中
game.prototype.randomCell = function() {
    for (var i = 0; i <= this.cells.length; i++) {
        this.cellsCopy.push(this.cells[i]);
    }

    for (var i = this.cellsCopy.length - 1; i > 0; i--) {
        var random = Math.floor(Math.random() * i);
        this.randomArr.push(this.cellsCopy[random]);
        this.cellsCopy.splice(random, 1);
    }

    var self = this;
    var eles = this.obj.querySelectorAll("div");
    eles.forEach(function(element) {
        self.obj.removeChild(element);
    });
    for (var i = 0; i < this.randomArr.length; i++) {
        this.obj.appendChild(this.randomArr[i]);
    }
};

game.prototype.btnAddEvent = function() {
    var self = this;

    this.btn.onclick = function() {
        if (this.innerText == "开始") {
            this.innerText = "复原";
            this.classList.remove("start");
            this.classList.add("reset");
            self.randomCell();
            self.addEvent();
        } else {
            this.innerText = "开始";
            this.classList.remove("reset");
            this.classList.add("start");
            self.initCell();
            self.removeAddEvent();
        }
    };
};

//为碎片绑定事件
game.prototype.addEvent = function() {
    var self = this;

    this.randomArr.forEach(function(cell, index) {
        // 设置元素可拖拽
        cell.draggable = true;
        // 开始拖动
        cell.ondragstart = function(event) {
            event.dataTransfer.setData("index", index);
        };

        // 监听拖动
        cell.ondragover = function(event) {
            event.preventDefault();
        };

        // 监听放
        cell.ondrop = function(event) {
            var dragIndex = event.dataTransfer.getData("index");
            var dragParent = self.randomArr[dragIndex].parentNode;

            var dropParent = this.parentNode;

            // 判断拖拽的元素和放的容器是否为同一父元素以及两容器是否为同一元素
            if (dragParent != dropParent || dragIndex == index) {
                return;
            }

            // 替换位置
            var replace = document.createElement("div");
            self.obj.replaceChild(replace, this);
            self.obj.replaceChild(this, self.randomArr[dragIndex]);
            self.obj.replaceChild(self.randomArr[dragIndex], replace);

            setTimeout(function() {
                if (self.isFinsh()) {
                    alert("成功通关");
                }
            }, 300);
        };
    });
};

game.prototype.removeAddEvent = function() {
    this.cells.forEach(function(cell, index) {
        cell.draggable = false;
        cell.ondragstart = null;
        cell.ondragover = null;
        cell.ondrop = null;
    });
};

//判断是否通关
game.prototype.isFinsh = function() {
    var nowCell = this.obj.querySelectorAll("div");
    var flag = false;
    for (var i = 0; i < nowCell.length; i++) {
        if (nowCell[i].style.backgroundPosition != this.firstPosition[i]) {
            flag = false;

            return flag;
        }
    }
    flag = true;
    return flag;
};

game.prototype.init = function() {
    this.creatElement();
    this.initCell();
    this.btnAddEvent();
};
