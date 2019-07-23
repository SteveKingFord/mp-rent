<template>
  <div class="container">
    <nav-bar  title="我的账单" />
    <div class="bill-list">
       <van-row class="bill-list__head">
          <van-col span="6">日期</van-col>
          <van-col span="6">房租</van-col>
          <van-col span="6">水费</van-col>
          <van-col span="6">电费</van-col>
        </van-row>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
				<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-row class="bill-list__item" v-for="i in list" :key="i">
            <van-col span="6">07/15</van-col>
            <van-col span="6">1200.00</van-col>
            <van-col span="6">15.00</van-col>
            <van-col span="6">68.50</van-col>
          </van-row>
      	</van-list>
			</van-pull-refresh>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			isLoading: false,
			count: 0,
			//下拉加载
			list: [],
			loading: false,
			finished: false
		}
	},
	methods: {
		onSearch() {},
		onRefresh() {
			setTimeout(() => {
				this.$toast('刷新成功')
				this.isLoading = false
				this.count++
			}, 500)
		},
		onLoad() {
			this.loading = true
			// 异步更新数据
			setTimeout(() => {
				for (let i = 0; i < 10; i++) {
					this.list.push(this.list.length + 1)
				}
				// 加载状态结束
				this.loading = false

				// 数据全部加载完成
				if (this.list.length >= 400) {
					this.finished = true
				}
			}, 500)
		}
	}
}
</script>


<style lang="less" scoped>
.bill-list {
  text-align: center;
  padding-top: 44px;
  &__head {
    position: fixed;
    top: 45px;
    left: 0;
    right: 0;
    height: 44px;
    width: 100%;
    font-size: 12px;
    color: #909090;
    line-height: 44px;
    z-index: 10;
   background: #F5F5F5;
  }
  &__item {
    height: 55px;
    line-height: 55px;
    font-size: 14px;
    background: #fff;
    &:not(:last-child){
      border: 1px solid #F5F5F5;
    }
  }
  
}
</style>

