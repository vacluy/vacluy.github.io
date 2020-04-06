
function Magnifiter(selector, options) {
    this.$origin = $(selector);
    this.$layer = this.$origin.find('div.layer');
    this.$mask = this.$origin.find('div.mask');
    this.$thumbnail = this.$origin.find('div.thumbnail');
    this.$level = this.$origin.find('select.level');
    this.$large = this.$origin.find('div.large');
    this.options = options;
    /*
        options = {
            level:true/false
        }
    */

    if (this.options == undefined) {
        this.level = false;
    } else {
        this.level = this.options.level;
    }

    // 绑定层宽高
    this.layerWidth = this.$layer.width();
    this.layerHeight = this.$layer.height();

    // 滑块宽高
    this.maskWidth = 0;
    this.maskHeight = 0;

    // 放大盒子的宽高
    this.largeWidth = this.$large.width();
    this.largeHeight = this.$large.height();

    // 绑定层与滑块放大倍数
    this.multiple = 2;

    // 放大盒子与滑块放大比例
    this.percentX = 1;
    this.percentY = 1;

    this.init();
}

Magnifiter.prototype.init = function () {
    this.maskWidth = this.layerWidth / this.multiple;
    this.maskHeight = this.layerHeight / this.multiple;

    this.$mask.css({ width: this.maskWidth + 'px', height: this.maskHeight + 'px' });

    this.percentX = this.largeWidth / this.maskWidth;
    this.percentY = this.largeHeight / this.maskHeight;

    this.thumbnailEnter();

    if (this.level) {
        this.multipleChange();
    }

    this.layerEvent();
}

Magnifiter.prototype.thumbnailEnter = function () {

    var self = this;

    this.$thumbnail.find('div').mouseenter(function () {
        $(this).addClass('active').siblings('div').removeClass('active');

        var dataSrc = $(this).attr('data-src');
        self.$layer.siblings('img').prop('src', dataSrc).attr('data-src', dataSrc);
    });
}

Magnifiter.prototype.multipleChange = function () {

    var self = this;

    this.$level.change(function () {
        self.multiple = $(this).val();

        self.maskWidth = self.layerWidth / self.multiple;
        self.maskHeight = self.layerHeight / self.multiple;

        self.$mask.css({
            width: self.maskWidth + 'px',
            height: self.maskHeight + 'px'
        })

        self.percentX = self.largeWidth / self.maskWidth;
        self.percentY = self.largeHeight / self.maskHeight;
    });
}
Magnifiter.prototype.layerEvent = function () {

    var self = this;

    this.$layer
            .mouseenter(function () {
                self.$mask.css('display', 'block');

                var imgSrc = $(this).siblings('img').attr('data-src');
                self.$large.css(
                    {
                        display: 'block',
                        backgroundImage: 'url(' + '\'' + imgSrc + '\'' + ')',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: self.layerWidth * self.percentX + 'px ' + self.layerHeight * self.percentY + 'px'
                    });
            })
            .mousemove(function(e) {
                var x = e.offsetX;
                var y = e.offsetY;
        
                //滑块横向移动的范围
                var minLeft = 0;
                var maxLeft = self.layerWidth - self.maskWidth;
        
                //滑块纵向移动的范围
                var minTop = 0;
                var maxTop = self.layerHeight - self.maskHeight;
        
                var left = x - self.maskWidth / 2;
                var top = y - self.maskHeight / 2;
        
                //控制mask移动范围
                left = left >= maxLeft ? maxLeft : left <= minLeft ? minLeft : left;
                top = top >= maxTop ? maxTop : top <= minTop ? minTop : top;
        
                self.$mask.css({ left: left + 'px', top: top + 'px' });
        
                //移动放大图
                self.$large.css('background-position', -left * self.percentX + 'px ' + -top * self.percentY + 'px');
            })
            .mouseleave(function() {
                self.$mask.css('display', 'none');
                self.$large.css('display', 'none');
            });
}