[Demo](https://id1945.github.io/vue-basic/39.event-modifier/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 39.event-modifier
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/39.event-modifier
npm install
npm run serve
```

### v-on tag

````html
<input v-on:change="callMethod">
<input v-on:keyup="callMethod">
````
## Event Modifiers
````html
<input type="submit" v-on:click.stop="callMethod">
<input v-model="prevent" v-on:click.self="callMethod">
<input v-model="title" v-on:click.capture="callMethod">
<input v-model="title" v-on:click.self="callMethod">
<input v-model="title" v-on:click.once="callMethod">
<input v-model="title" v-on:click.stop.prevent="callMethod">
````
.stop: sự kiện này sẽ không được propagate (mình không chắc dịch ra tiếng Việt thế nào cho sát, điều này tương đương với event.stopPropagation()

.prevent: sử dụng khi bạn không muốn ngăn chặn hành vi mặc định của sự kiện (cái này tương đương với event.preventDefault() )

.capture: một sự kiện xảy ra với một phần tử bên trong sẽ được xử lí ở đây trước khi được xử lí bởi phần tử đó (tạm hiểu là tiền xử lí, bạn có thể đọc chi tiết hơn tại đây)

.self: chỉ kích hoạt phương thức xử lí nếu event.target là chính phần thử được thao tác chứ không phải là một phần tử con.

.once (xuất hiện từ phiên bản 2.1.4): là một giá trị true-false để kiểm tra listener chỉ gọi nhiều nhất 1 lần sau khi được thêm. Nếu giá trị là true, listener sẽ tự động loại bỏ khi được gọi.

.passive (xuất hiện từ phiên bản 2.3.0): hành vi mặc định của sự kiện sẽ xảy ra ngay lập tức, thay vì đợi phần xử-lí hoàn tất.

--> chú ý rằng .passive và .prevent không được sử dụng cùng nhau.
--> Sử dụng nối tiếp nhau kiểu .modifier1.modifier2:
```javascript
v-on:click.prevent.self   //sẽ ngăn toàn bộ click (prevent trước)
v-on:click.selt.prevent   // chỉ ngăn các click trên phần tử được nhắc tới (selft trước)
```
## Key modifier
````html
<input v-on:keyup.enter="callMethod">
````
##### Keycode
````
.enter
.tab
.delete (hiệu lực với cả 2 nút  “Delete” và “Backspace”)
.esc
.space
.up
.down
.left
.right
````
````html
<input v-on:keyup.ctrl.65="callMethod">
<input v-on:keyup.ctrl.alt.65="callMethod">
````
````
.ctrl
.alt
.shift
.meta
````
##### Mouse
```
.left <!-- khi chuột trái click -->
.right <!-- khi chuột phải click -->
.middle <!-- khi bấm con lăn chuột  -->
```

##### Exact
````html
<!-- Được gọi ngay cả khi các nút khác được bấm đồng thời như Alt hay Shift -->
<button @click.ctrl="onClick">A</button>
<!-- chỉ thực hiện khi bấm chính xác tổ hợp click+ctrl -->
<button @click.ctrl.exact="onCtrlClick">A</button>
<!-- Chỉ thực hiện khi click -->
<button @click.exact="onClick">A</button>
````
