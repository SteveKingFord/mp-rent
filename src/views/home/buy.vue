<template>
  <div class="buy">
    <nav-bar title="立即购买"></nav-bar>
    <div class="procut-card">
      <div class="img-box">
        <img src="/static/product/collect.png" alt="">
      </div>
      <div class="info-box">
        <p class="desc">男鞋夏季潮鞋2019新款网鞋潮流百搭男士运动休闲鞋子帆布透气板鞋</p>
        <p>
          <span>颜色：黑</span> 
          <span>码数：36</span> 
        </p>
        <p>
          <span>品牌：阿迪达斯</span>
          <span>型号：3254a</span>
          <span>标签：椰子鞋</span>
        </p>
        <p>
          <span>拿货价：￥220.00</span>
          <span>批发价：￥260.00</span>
        </p>
        <p class="margin-bottom-sm">
          <span>单价:220.00</span>
          <span>数量:1</span>
          <span>共计:220</span>
        </p>
        <div class="text-right btn-group">
          <van-button size="small" class="select" @click="openPopup('select')">选择地址</van-button>
          <van-button size="small" class="add"  @click="openPopup('add')">添加地址</van-button>
        </div>
      </div>
    </div>
    <!-- 二维码 -->
    <div class="img-box qr-code">
      <img src="/static/qr.jpg" alt="">
    </div>
    <div class="buy-info">
      <p class="name">收款人：Mr(*彬)</p>
      <p class="title">收款二维码</p>
      <van-button size="small" class="order__btn" >加入订单</van-button>
      <van-button size="small" class="pay__btn">已支付</van-button>
    </div>
    <!-- 需知 -->
    <div class="know">
      <div>购物须知:</div>
      <p>1.鞋袋在产品定价上以让利顾客为主，更为合理的价格就能让顾客享受到专业体育器材的品质；再加上网站定期会推出 厂家让利活动，所以不再议价。 </p>
      <p>2.产品色差：所有产品均为实物拍摄，我们的照片尽可能的与实物颜色保持一致，货品图片颜色大小因拍摄或计算机屏幕设定产生差异会 略有不同，以实际货品颜色大小为准。</p>
    </div>

    <!-- 弹窗 -->
		<van-popup v-model="show">
			<div class="popup">
				<div class="popup-head">
					 {{textMap[popupStatus]}}
					<van-icon name="close" class="close" @click="hidePopup" />
				</div>
				<div class="popup-content">
          <template v-if="popupStatus=='select'">
            <div class="popup-field">
              <input type="text" placeholder="请输入手机号码或收货人" />
              <van-button size="small" class="search__btn" >搜索</van-button>
            </div>
            <vue-scroll style="height:200px">
              <div class="popup-list">
              <div class="popup-item" v-for="i in 10" :key="i">
                <div>
                  <p>林生<span>18659784458</span></p>
                  <p class="address">安徽省合肥市蜀山区蜀山传1107</p>
                </div>
                <van-button type="default" size="small" class="select__btn">选择</van-button>
              </div>
              </div>
            </vue-scroll>        
          </template>
          <template v-if="popupStatus=='add'">
            <div class="popup-add">
              <van-row class="row">
                <van-col span="6">收件人</van-col>
                <van-col span="18">
                  <input type="text" placeholder="王小姐" />
                </van-col>
              </van-row>
              <van-row class="row">
                <van-col span="6">手机号</van-col>
                <van-col span="18">
                  <input type="text" placeholder="请输入手机号码或收货人" />
                </van-col>
              </van-row>
              <van-row class="row">
                <van-col span="6">地址</van-col>
                <van-col span="18" class="address">
                  <select class="select">
                    <option value="1">全部</option>
                    <option value="2">福建</option>
                  </select>
                  <select class="select">
                    <option value="1">全部</option>
                    <option value="2">新疆</option>
                  </select>
                  <select class="select">
                    <option value="1">全部</option>
                    <option value="2">江苏</option>
                  </select>
                </van-col>
              </van-row>
              <van-row class="row">
                <van-col span="6">详细地址</van-col>
                <van-col span="18">
                  <input type="text" placeholder="地址" />
                </van-col>
              </van-row>
              <van-button type="default" size="large" class="primary-bg popup__btn">确定添加</van-button>
            </div>
          </template>



				</div>
			</div>
		</van-popup>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      popupStatus: 'add',
      textMap:{
        'add':'添加地址',
        'select':'选择地址'
      },
      show: false,
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ]
    }
  },
  methods: {
    openPopup(val){
      this.popupStatus = val;
      this.show = true;
    },
    hidePopup() {
      this.show = false;
    }
  }
}
</script>


<style lang="less" scoped>
.buy {
  padding-top: 45px;
  .procut-card {
    margin-top: 10px;
    padding: 15px;
    background: #fff;
    display: flex;

    .img-box {
      width: 100px;
      height: 100px;
    }
    .info-box {
      flex: 1;
      padding-left: 10px;
      font-size: 10px;
      color: #999999;
      .desc {
        font-size: 12px;
        color: #333;
      }
      p {
        margin-bottom: 5px;
        &.margin-bottom-sm {
          margin-bottom: 15px;
        }
      }
      .btn-group {
        padding-top: 10px;
        border-top: 1px solid #EFF1F8;
        .select {
          color: #4963C2;
          border: 1px solid #4963C2;
          border-radius: 4px;
          margin-right: 10px;
        }
        .add {
          color: #FE8F00;
          border: 1px solid #FE8F00;
          border-radius: 4px;
        }
      }
    }
  }
  .qr-code {
    width: 150px;
    height: 150px;
    margin: 20px auto 10px;
    text-align: center;
    
  }
  .know {
    padding: 20px 40px;
    color: #333;
    p{
      color: #666666;
    }
  }
  &-info {
    text-align: center;
    .name {
      font-size: 10px;
      color: #666666;
    }
    .title {
      font-size: 18px;
      color: #333;
      padding: 10px 0;
    }
    .order__btn {
      color: #fff;
      background: #4963C2;
      border-radius: 6px;
    }
    .pay__btn {
      color: #fff;
      background: #FE8F00;
      border-radius: 6px;
    }
  }
}
.popup {
	width: 310px;
	min-height: 280px;
  border-radius: 8px;
	&-head {
		color: #fff;
		padding: 15px 0;
		font-size: 18px;
		text-align: center;
		background: #4963c2;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		position: relative;
		.close{
			position: absolute;
			top: 10px;
			right: 10px;
			font-size: 25px;
		}
	}
	&-content {
		background: #fff;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		.money {
			color: #333;
			font-size: 16px;
			padding-left: 10px;
		}
		.record {
			width: 100%;
			color: #4963c2;
			text-align: center;
			padding-top: 15px;
			display: inline-block;
		}
	}
	&-field {
    display: flex;
    padding: 10px 25px;
		input {
			width: 100%;
			height: 35px;
			border-radius: 5px;
			padding-left: 5px;
			border: 1px solid #b4b4b4;
			color: #333;
			&::-webkit-input-placeholder {
				color: #b9b9b9;
			}
    }
    .search__btn {
      height: 38px;
      padding: 0 5px;
      margin-left: 10px;
      border-radius: 6px;
      color: #4963C2;
      border: 1px solid #4963C2;
    }
  }
  &-list {
    padding: 0 25px 10px;
  }
  &-item {
    display: flex;
    font-size: 12px;
    color: #838383;
    padding: 10px 0;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #D9D9D9;
    .select__btn {
      color: #FE8F00;
      border-radius: 6px;
      border: 1px solid #FE8F00;  
    }
    .address {
      margin-top: 5px;
    }
    
  }
  &-add {
    padding: 10px 20px;
    .row {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      input {
        width: 100%;
        height: 30px;
        border: 0;
        color: #333;
        border-bottom: 1px solid #D9D9D9FF;
        &::-webkit-input-placeholder {
          color: #838383;
        }
      }
      .address {
        border-bottom: 1px solid #D9D9D9;
        select {
          width: 30.33%;
          height: 30px;
          border: 0;
        } 
      }
    }
    .popup__btn {
      margin: 10px 0 15px;
      border-radius: 6px;
    }
  }
  
	
}
</style>
<style lang="less">
.buy {
	.van-popup {
		border-radius: 6px;
		background-color: transparent;
	}
}
</style>
