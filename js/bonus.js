const onHiddenCon = (e) => {
  e.parentElement.classList.toggle('on')
}

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

  //let result_total = document.querySelector('.sudang__calc_result_total');
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
    listAll.forEach(el=>el.classList.remove('on'));
    if(!check){
      e.parentElement.classList.add('on');
    }
  }

  const clearResult = () => {
    let dt = document.querySelectorAll('.sudang__calc_result_info dt')
    let price = document.querySelectorAll('.sudang__calc_result_info .sudang_price')
    let tbl = document.querySelectorAll('.sudang__calc_result_info_table')
    dt.forEach(el=>el.innerHTML = '')
    price.forEach(el=>el.innerHTML = '')
    //tbl.forEach(el=>el.querySelector('tbody').innerHTML = '')
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

    clearResult();
    result_box.classList.remove('on')
  }

  const maxCheck = (e) => {
    if(e.value > e.max){
      e.value = e.max;
    }
  }

  const onPriceFormat = (price,div) => {
    if(price.value[0] == 0){
      price.value = price.value.substr(1)
    }
    let format_price = price.value;
    if(format_price.length > 8){
      price.value = price.value.substr(0,8);
      format_price = format_price.substr(0,8);
    }
    let price_txt;
    let uk;
    let man;
    if(format_price.length <= 4){
      price_txt = commaNumber(format_price) + '만원';
    }else {
      uk = Math.floor(format_price/10000);
      uk = uk ? commaNumber(uk)+'억' : '';
      man = format_price % 10000;
      man = man ? commaNumber(man)+'만' : '';
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
    price = price ? price : 0;
    if(price.length <= 4){
      price_txt = `<span>${price}</span>` + '만원'
    }else{
      uk = Math.floor(price/10000);
      uk = uk ? `<span>${commaNumber(uk)}</span>`+'억' : '';
      man = Math.round(price % 10000);
      man = man > 0 ? `<span>${commaNumber(man)}</span>`+'만' : '';
      price_txt = `${uk}${man}원`
    }
    return price_txt;
  }

  const calcPromotionSudang = (total,sudang1,bunus) => {
    let sudang_5 = 0;
    let list5 = document.querySelector('.sudang__calc_result_info.list_5');
    let perDt = list5.querySelector('.calc_per dt');
    let tbl = document.querySelector('.sudang__calc_result_info_table.tbl_3')
    let per;
    let price = `${onPriceFormat2(sudang1)}`;
    price += `<span class="ic_x small"></span>`;
    price += `<span>${bunus}</span> %`;
    list5.querySelector('.calc_price dt').innerHTML = price;

    tbl.querySelectorAll('tbody tr').forEach(el=>{
      el.classList.remove('on');
    })
    if(total < 200){
      sudang_5 = sudang1*bunus/100;
      per = `<span>100</span> %`;
      tbl.querySelector('tbody tr:nth-child(1)').classList.add('on')
    }
    if(total >= 200 && total < 400){
      sudang_5 = sudang1*bunus/100*0.5;
      per = `<span>50</span> %`;
      tbl.querySelector('tbody tr:nth-child(2)').classList.add('on')
    }
    if(total >= 400 && total < 500){
      sudang_5 = sudang1*bunus/100*0.3;
      per = `<span>30</span> %`;
      tbl.querySelector('tbody tr:nth-child(3)').classList.add('on')
    }
    if(total >= 500){
      per = `<span>0</span> %`;
    }
    perDt.innerHTML = per;
    sudang_5 = sudang_5 > 30 ? 30 : sudang_5;
    list5.querySelector('.sudang_price').innerHTML = sudang_5 ? `${onPriceFormat2(sudang_5)}` : `<span>0</span>원`;
    return sudang_5;
  }

  const calcPromotionSudang2 = (total,sudang_mat) => {
    let sudang_6 = 0;
    let tbl = document.querySelector('.sudang__calc_result_info_table.tbl_4 tbody tr');
    if(total < 1000){
      sudang_6 = sudang_mat;
      tbl.classList.add('on');
    }else{
      tbl.classList.remove('on');
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
    priceBox.innerHTML = onPriceFormat2(price);
    perBox.innerHTML = `<span>${per}</span>` + '%'
    sudangBox.innerHTML = onPriceFormat2(price * per/100);
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

  const tableInfo = (table,div) => {
    let divBox = document.querySelector(div);
    let tbody = '';
    table.forEach(el=>{
      let price = onPriceFormat2(el.price)
      let bonus = onPriceFormat2(el.bonus)
      let tr = '';
      tr += `<tr>`;
      tr += `<td>${price}</td>`;
      if(el.rank){
        tr+= `<td>${el.rank}</td>`;  
      }  
      tr += `<td>${bonus}</td>`;
      tr += `</tr>`;
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
    clearResult();
    let total_sales = parseInt(sales_1.value) + parseInt(sales_2.value);

    sudang_1 = sales_1.value * f.bonus_1.value/100;
    sudang_2 = sales_2.value * f.bonus_2.value/100;
    sudang_mat = sales_2.value * f.bonus_1.value/100;
    sudang_3 = calcSudang(sudang_3_table,total_sales);
    sudang_4 = calcSudang(sudang_4_table,total_sales);
    sudang_5 = calcPromotionSudang(total_sales,sales_1.value,bonus_1.value);
    sudang_6 = calcPromotionSudang2(total_sales,sudang_mat);


    calcInfo(sales_1.value,f.bonus_1.value,'.sudang__calc_result_info.list_1')
    calcInfo(sales_2.value,f.bonus_2.value,'.sudang__calc_result_info.list_2')
    
    
    calcInfo2(sudang_3_table,'.sudang__calc_result_info_table.tbl_1',sudang_3.idx)
    calcInfo2(sudang_4_table,'.sudang__calc_result_info_table.tbl_2',sudang_4.idx)



    calcInfo(sales_2.value,f.bonus_1.value,'.sudang__calc_result_info.list_6')    




    let sudang_total = (sudang_1 + sudang_2 + sudang_3.bonus + sudang_4.bonus + sudang_5 +sudang_6).toFixed(2);
    sudang_total = onPriceFormat2(sudang_total);

    sudang_1 = sudang_1 ? `${onPriceFormat2(sudang_1)}` : '0만원';
    sudang_2 = sudang_2 ? `${onPriceFormat2(sudang_2)}` : '0만원';
    sudang_3 = `${onPriceFormat2(sudang_3.bonus)}`;

    sudang_5 = `${sudang_5}만원`;
    sudang_6 = `${sudang_6}만원`;
    
    
    //result_total.innerHTML = sudang_total;

   //장려보너스
   let sudangBox3 = document.querySelector('.sudang__calc_result_info.list_3');
   sudangBox3.querySelector('.calc_price dt').innerHTML = `${onPriceFormat2(total_sales)}`;
   sudangBox3.querySelector('.sudang_price').innerHTML = sudang_3;

   //직급보너스
   let sudangBox4 = document.querySelector('.sudang__calc_result_info.list_4');  
   sudangBox4.querySelector('.calc_price dt').innerHTML = `${onPriceFormat2(total_sales)} /&nbsp;<span class="rank">${sudang_4.rank}</span>`;
   sudangBox4.querySelector('.sudang_price').innerHTML = onPriceFormat2(sudang_4.bonus); 


    result_box.classList.add('on')

  }

  const commaNumber = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  //레이어팝업 
  const onLayer = async (div,url,type) => {
    let box = document.querySelector(div);
    let con = box.querySelector('.sudang__calc_layer_con')
    let html = await fetch(url)
    .then(res=>res.text())
    .then(res=>res)
    con.innerHTML = html;
    if(type === 1){
      tableInfo(sudang_3_table,'.sudang__calc_layer_desc .sudang__calc_result_info_table')
    }
    if(type === 2){
      tableInfo(sudang_4_table,'.sudang__calc_layer_desc .sudang__calc_result_info_table')
    }
    box.classList.add('on');
    document.body.classList.add('fix');
  }
  const closeLayer = (div) => {
    document.querySelector(div).classList.remove('on')
    document.body.classList.remove('fix');
  }