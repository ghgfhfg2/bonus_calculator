  let sudang_3_table = [
      {
        idx:1,
        price:100,
        bonus:5
      },
      {
        idx:2,
        price:250,
        bonus:10
      },
      {
        idx:3,
        price:500,
        bonus:20
      },
      {
        idx:4,
        price:1000,
        bonus:30
      },
      {
        idx:5,
        price:3000,
        bonus:50
      },
      {
        idx:6,
        price:5000,
        bonus:80
      },
      {
        idx:7,
        price:10000,
        bonus:150
      },
      {
        idx:8,
        price:30000,
        bonus:300
      },
      {
        idx:9,
        price:50000,
        bonus:500
      },
      {
        idx:10,
        price:70000,
        bonus:700
      },
      {
        idx:11,
        price:100000,
        bonus:1000
      },
      {
        idx:12,
        price:150000,
        bonus:1500
      },
      {
        idx:13,
        price:200000,
        bonus:2000
      },
      {
        idx:14,
        price:250000,
        bonus:2500
      },
      {
        idx:15,
        price:300000,
        bonus:3000
      },
      {
        idx:16,
        price:400000,
        bonus:4000
      },
      {
        idx:17,
        price:500000,
        bonus:5000
      },
    ]
    let sudang_4_table = [
      {
        idx:1,
        price:100,
        rank:"에이스",
        bonus:5
      },
      {
        idx:2,
        price:250,
        rank:"브론즈",
        bonus:10
      },
      {
        idx:3,
        price:500,
        rank:"실버",
        bonus:20
      },
      {
        idx:4,
        price:1000,
        rank:"골드",
        bonus:30
      },
      {
        idx:5,
        price:3000,
        rank:"플래티늄",
        bonus:50
      },
      {
        idx:6,
        price:5000,
        rank:"매니저",
        bonus:80
      },
      {
        idx:7,
        price:10000,
        rank:"디렉터",
        bonus:150
      },
      {
        idx:8,
        price:30000,
        rank:"1스타",
        bonus:300
      },
      {
        idx:9,
        price:50000,
        rank:"2스타",
        bonus:500
      },
      {
        idx:10,
        price:70000,
        rank:"3스타",
        bonus:700
      },
      {
        idx:11,
        price:100000,
        rank:"4스타",
        bonus:1000
      },
      {
        idx:12,
        price:150000,
        rank:"5스타",
        bonus:1500
      },
      {
        idx:13,
        price:200000,
        rank:"크라운",
        bonus:2000
      },
      {
        idx:14,
        price:250000,
        rank:"더블 크라운",
        bonus:2500
      },
      {
        idx:15,
        price:300000,
        rank:"트리플 크라운",
        bonus:3000
      },
      {
        idx:16,
        price:400000,
        rank:"크라운 엠버서더",
        bonus:4000
      },
      {
        idx:17,
        price:500000,
        rank:"로열 크라운 엠버서더",
        bonus:5000
      },
    ]
  let sudang_1 = 0;
  let sudang_2 = 0;
  let sudang_3;
  let sudang_4;
  let sudang_5;
  let sudang_6;

  let result_1 = document.querySelector('.sudang__calc_result_1');
  let result_2 = document.querySelector('.sudang__calc_result_2');
  let result_3 = document.querySelector('.sudang__calc_result_3');
  let result_4 = document.querySelector('.sudang__calc_result_4');
  let result_5 = document.querySelector('.sudang__calc_result_5');
  let result_6 = document.querySelector('.sudang__calc_result_6');
  let result_total = document.querySelector('.sudang__calc_result_total');
  let result_box = document.querySelector('.sudang__calc_result');  
  
  let result_1_info = document.querySelector('.sudang__calc_result_1_info');
  let result_2_info = document.querySelector('.sudang__calc_result_2_info');
  let result_3_info = document.querySelector('.sudang__calc_result_3_info');
  let result_4_info = document.querySelector('.sudang__calc_result_4_info');
  let result_5_info = document.querySelector('.sudang__calc_result_5_info');
  let result_6_info = document.querySelector('.sudang__calc_result_6_info');  

  const numRegex = /[^\d]/;

  const bonusInfo = (e) => {
    let listAll = document.querySelectorAll('.sudang__calc_result_list_li');
    let check = e.parentElement.classList.contains('on');
    listAll.forEach(el=>el.classList.remove('on'))
    if(!check){
      e.parentElement.classList.add('on')
    }
  }
  
  const clacClear = () => {
    let f = document.forms.sudangCalcFrom;
    let sales_1 = f.sales_1;
    let sales_2 = f.sales_2;
    let bonus_1 = f.bonus_1;
    let bonus_2 = f.bonus_2;

    sales_1.value = '';
    sales_2.value = '';
    bonus_1.value = '';
    bonus_2.value = '';

    document.querySelector('.sudang__calc_format_price.sales1_price').innerHTML = '0만원';
    document.querySelector('.sudang__calc_format_price.sales2_price').innerHTML = '0만원';

    result_1.innerHTML = '';
    result_2.innerHTML = '';
    result_3.innerHTML = '';
    result_4.innerHTML = '';
    result_5.innerHTML = '';
    result_6.innerHTML = '';
    result_total.innerHTML = '';    
    result_box.classList.remove('on')
  }

  const onPriceFormat = (price,div) => {
    let format_price = price.value;
    if(format_price.length > 8){
      price.value = price.value.substr(0,8);
      format_price = format_price.substr(0,8);
    }
    let price_txt;
    let uk;
    let man;
    if(format_price.length <= 4){
      price_txt = format_price + '만원';
    }else {
      uk = Math.floor(format_price/10000);
      uk = uk ? uk+'억' : '';
      man = format_price % 10000;
      man = man ? man+'만' : '';
      price_txt = `${uk} ${man}원`;
    }

    if(price.value){
      document.querySelector(div).innerHTML = price_txt;
    }else{
      document.querySelector(div).innerHTML = '0만원';
    }
      
  }

  const onPriceFormat2 = (price) =>{
    let price_txt;
    let uk;
    let man;
    if(price.length <= 4){
      price_txt = price + '만원'
    }else{
      uk = Math.floor(price/10000);
      uk = uk ? uk+'억' : '';
      man = price % 10000;
      man = man >= 0.1 ? man+'만' : '';
      price_txt = `${uk} ${man}원`
    }
    return price_txt;
  }

  const calcPromotionSudang = (total,sudang1) => {
    let sudang_5 = 0;
    if(total < 200){
      sudang_5 = sudang1;
    }
    if(total >= 200 && total < 400){
      sudang_5 = sudang1*0.5
    }
    if(total >= 400 && total < 500){
      sudang_5 = sudang1*0.3
    }
    sudang_5 = sudang_5 > 30 ? 30 : sudang_5;
    return sudang_5;
  }

  const calcPromotionSudang2 = (total,sudang_mat) => {
    let sudang_6 = 0;
    if(total < 1000){
      sudang_6 = sudang_mat;
    }
    sudang_6 = sudang_6 > 20 ? 20 : sudang_6;
    return sudang_6;
  }

  
  const calcSudang = (table,total) => {
    let sudadng = 0;
    table.forEach((el,idx)=>{
      if(total >= el.price){
        if(el[idx+1] && total < el[idx+1].price){
          sudadng = el
        }else{
          sudadng = el ? el : 0
        }
      }
    })
    sudadng = sudadng ? sudadng : {bonus:0}
    return sudadng;
  }

  const calcInfo = (price,per,div) => {
    let divBox = document.querySelector(div);
    let priceBox = divBox.querySelector('.calc_price dt')
    let perBox = divBox.querySelector('.calc_per dt')
    let sudangBox = divBox.querySelector('.sudang_price')
    priceBox.innerHTML = price + '만원'
    perBox.innerHTML = per + '%'
    sudangBox.innerHTML = price * per/100 + '만원'
  }

  const calcInfo2 = (table,div,id) => {
    let divBox = document.querySelector(div);
    let tbody = '';
    table.forEach(el=>{
      let price = onPriceFormat2(el.price)
      let bonus = onPriceFormat2(el.bonus)
      let tr = '';
      if(el.idx >= id - 1 && el.idx <= id + 1){
        tr += el.idx == id ? `<tr class="on">` : `<tr>`;
        tr+= el.idx < id ? `<td>이전</td>` :
             el.idx == id ? `<td>달성</td>` : 
             el.idx > id ? `<td>다음</td>` : ``;
        tr+= `<td>${price}</td>`;  
        if(el.rank){
          tr+= `<td>${el.rank}</td>`;  
        }  
        tr+= `<td>${bonus}</td>`;  
        tr+=`</tr>`;
      }
      tbody += tr;
    })
    divBox.querySelector('tbody').innerHTML = tbody;
    
  }

  let clacSubmit = ()=>{
    let f = document.forms.sudangCalcFrom;
    let sales_1 = f.sales_1;
    let sales_2 = f.sales_2;
    let bonus_1 = f.bonus_1;
    let bonus_2 = f.bonus_2;

    if(!sales_1.value){
      alert('1대매출을 입력해 주세요');
      f.sales_1.focus();
      return;
    }
    if(!sales_2.value){
      alert('2대매출을 입력해 주세요');
      f.sales_2.focus();
      return;
    }
    if(!bonus_1.value){
      alert('추천보너스를 입력해 주세요');
      f.bonus_1.focus();
      return;
    }
    if(!bonus_2.value){
      alert('후원보너스를 입력해 주세요');
      f.bonus_2.focus();
      return;
    }

    let total_sales = parseInt(sales_1.value) + parseInt(sales_2.value);

    sudang_1 = sales_1.value * f.bonus_1.value/100;
    sudang_2 = sales_2.value * f.bonus_2.value/100;
    sudang_mat = sales_2.value * f.bonus_1.value/100;
    sudang_3 = calcSudang(sudang_3_table,total_sales);
    sudang_4 = calcSudang(sudang_4_table,total_sales);
    sudang_5 = calcPromotionSudang(total_sales,sudang_1);
    sudang_6 = calcPromotionSudang2(total_sales,sudang_mat);


    calcInfo(sales_1.value,f.bonus_1.value,'.sudang__calc_result_info.list_1')
    calcInfo(sales_2.value,f.bonus_2.value,'.sudang__calc_result_info.list_2')
    if(sudang_5){
      calcInfo(sales_1.value,f.bonus_1.value,'.sudang__calc_result_info.list_3')
    }else{
      document.querySelector('.sudang__calc_result_info.list_3').classList.add('no')
    }
    if(sudang_6){
      calcInfo(sales_2.value,f.bonus_1.value,'.sudang__calc_result_info.list_4')
    }else{
      document.querySelector('.sudang__calc_result_info.list_4').classList.add('no')
    }
    
    calcInfo2(sudang_3_table,'.sudang__calc_result_info_table.tbl_1',sudang_3.idx)
    calcInfo2(sudang_4_table,'.sudang__calc_result_info_table.tbl_2',sudang_4.idx)


    let sudang_total = (sudang_1 + sudang_2 + sudang_3.bonus + sudang_4.bonus + sudang_5 +sudang_6).toFixed(2);
    sudang_total = onPriceFormat2(sudang_total)

    sudang_1 = sudang_1 ? `${onPriceFormat2(sudang_1)}` : '0만원';
    sudang_2 = sudang_2 ? `${sudang_2}만원` : '0만원';
    sudang_3 = `${sudang_3.bonus}만원`;
    sudang_4 = sudang_4.rank ? `${sudang_4.rank} - ${sudang_4.bonus}만원` 
                : `${sudang_4.bonus}만원`;
    sudang_5 = `${sudang_5}만원`;
    sudang_6 = `${sudang_6}만원`;
    
    result_1.innerHTML = sudang_1;
    result_2.innerHTML = sudang_2;
    result_3.innerHTML = sudang_3;
    result_4.innerHTML = sudang_4;
    result_5.innerHTML = sudang_5;
    result_6.innerHTML = sudang_6;
    result_total.innerHTML = sudang_total;



    result_box.classList.add('on')

  }