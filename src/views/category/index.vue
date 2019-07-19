<template>
	<div class="category">
		<div>
			<div class="fixed">
        <van-search placeholder="请输入您想要的商品" v-model="search_key" />
      </div>
      <!-- 分类 -->
			<div class="category-card" v-for="item in categoryList" :key="item.id">
        <div class="category-title">{{item.category}}</div>
        <div class="category-list">
          <div class="category-item" v-for='product in item.children' :key="product.id">
            <div class="img-box">
              <img :src="product.img_url">
            </div>
            <p>{{product.name}}</p>
          </div>
          <div class="category-item"></div>
        </div>
      </div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      search_key:'',
      categoryList:[{
        id: 1,
        category: '男鞋',
        children:[{
          id: 1001,
          name:'男士休闲',
          img_url:'/static/product/category1.jpg'
        },
        {
          id: 1002,
          name:'男士休闲',
          img_url:'/static/product/category2.jpg'
        },
        {
          id: 1002,
          name:'男士休闲',
          img_url:'/static/product/category3.jpg'
        },
        {
          id: 1002,
          name:'男士休闲',
          img_url:'/static/product/category4.jpg'
        },
        {
          id: 1002,
          name:'男士休闲',
          img_url:'/static/product/category5.jpg'
        },
        {
          id: 1002,
          name:'男士休闲',
          img_url:'/static/product/category6.jpg'
        }]
      },
      {
        id: 2,
        category: '女鞋',
        children:[{
          name:'男士休闲',
          img_url:'/static/product/category1.jpg'
        },
        {
          name:'男士休闲',
          img_url:'/static/product/category2.jpg'
        },
        {
          id: 1002,
          name:'男士休闲',
          img_url:'/static/product/category3.jpg'
        },
        {
          id: 1002,
          name:'男士休闲',
          img_url:'/static/product/category4.jpg'
        },
        {
          id: 1002,
          name:'男士休闲',
          img_url:'/static/product/category5.jpg'
        },
        {
          id: 1002,
          name:'男士休闲',
          img_url:'/static/product/category6.jpg'
        }
        ]
      }]
    }
  }
}
</script>




<style lang="less" scoped>
.category {
  padding-top: 54px;
  padding-bottom: 55px;
  &-title {
    padding-left: 10px;
    position: relative;
    &::before {
      content: '';
      height: 80%;
      width: 3px;
      position: absolute;
      left: 0;
      top: 50%;
      background-color: #394C92;
      transform: translateY(-50%);
    }
  }
  &-card {
    padding: 10px 15px;
    background-color: #fff;
    margin-bottom: 10px;
    // &:not(:last-child) {
    //   margin-bottom: 10px;
    // }
    .category-list {
      display: flex;
      flex-wrap: wrap;
      padding-top: 20px; 
      .category-item {
        width: 33.33%;
        text-align: center;
        &:not(:last-child) {
          margin-bottom: 30px;
        }
        .img-box {
          width: 80px;
          height: 80px;
          margin: 0 auto;
        }
        p {
          margin-top: 10px;
        }
      }
    }
    
   
  }
}
</style>

