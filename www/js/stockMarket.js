function start(){
var url = "http://mybank.pl/gielda/indeks-wig20.html";
    $.ajax({
            type: "GET",
            url: url,
            dataType: "html",
//            jsonpCallback: 'callback',
            success: function (data) {
            $("#status").val(JSON.stringify(data));
//            data=$(data).find('.g_tab:nth-child(1) tr:nth-child(3) td b:nth-child(1)').text()
            data=$(data).find('b[style="font-size:15px"]').text()
              console.log(data)
              console.log(typeof data)
              alert(data);
            }
            ,
            error: function(xhr, textStatus, errorThrown) {
                    $("#status").val("Unavailable: " + textStatus);
                }
          });
}
function getData() {
var url = "http://query.yahooapis.com/v1/public/yql";
var symbol = $("#symbol").val();
var data = encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" + symbol + "')");

$.ajax({
type: "GET",
        url: url+"q=" + data + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env",
        dataType: "jsonp",
jsonpCallback: 'callback',
        success: function (data) {
        $("#status").val(JSON.stringify(data));
//          console.log(data)
//          alert(data);
//        }
//      })
//      ;
//
//$.getJSON(url, 'q=' + data + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env")
//    .done(function (data) {

         $("#name").text("Bid Price: " + data.query.results.quote.Symbol);
         $("#date").text("Bid Price: " + data.query.results.quote.Date);
         $("#time").text("Bid Price: " + data.query.results.quote.LastTradeTime);
         $("#result").text("Bid Price: " + data.query.results.quote.LastTradePriceOnly);
         $("#chg").text("Bid Price: " + data.query.results.quote.PercentChange);
         $("#bid").text("Bid Price: " + data.query.results.quote.LastTradePriceOnly);
         $("#ask").text("Bid Price: " + data.query.results.quote.Ask);
         $("#volume").text("Bid Price: " + data.query.results.quote.Volume);
         $("#high").text("Bid Price: " + data.query.results.quote.HighLimit);
         $("#low").text("Bid Price: " + data.query.results.quote.LowLimit);

         if(data.query.results.quote.PercentChange.indexOf("+") != -1){

            document.getElementById("chg").className = "greenText";
        }
         else{
            //alert(data.query.results.quote.PercentChange);

            document.getElementById("chg").className = "redText";
        }

//}).fail(function (jqxhr, textStatus, error) {
//    var err = textStatus + ", " + error;
//        $("#result").text('Request failed: ' + err);
},
error: function(xhr, textStatus, errorThrown) {
        $("#status").val("Unavailable: " + textStatus);
    }

});
}
function SendRequest()
{

    getData();
    document.getElementById('link1').click();
}

function CheckEnter(e)
{
    if ((e.keyCode && e.keyCode==13) || (e.which && e.which==13)) {
        return SendRequest();
    }
    return true;
}

function changeChart(select, item, url, symbol)
{
    url = url.replace('yhoo',$("#symbol").val());
    symbol = symbol.replace('YHOO',$("#symbol").val());
    var div1d=document.getElementById("div1d_"+item);
    var div5d=document.getElementById("div5d_"+item);
    var div3m=document.getElementById("div3m_"+item);
    var div6m=document.getElementById("div6m_"+item);
    var div1y=document.getElementById("div1y_"+item);
    var div2y=document.getElementById("div2y_"+item);
    var div5y=document.getElementById("div5y_"+item);
    var divMax=document.getElementById("divMax_"+item);
    var divChart=document.getElementById("imgChart_"+item);
    if(div1d==null || div5d==null || div3m==null || div6m==null || div1y==null || div2y==null || div5y==null || divMax==null || divChart==null)
        return;
    div1d.innerHTML="1d";
    div5d.innerHTML="5d";
    div3m.innerHTML="3m";
    div6m.innerHTML="6m";
    div1y.innerHTML="1y";
    div2y.innerHTML="2y";
    div5y.innerHTML="5y";
    divMax.innerHTML="Max";
    var rand_no = Math.random();
    rand_no = rand_no * 100000000;
    switch(select)
    {
    case 0:
        div1d.innerHTML ="<b>1d</b>";
        divChart.src = "http://ichart.finance.yahoo.com/b?s="+symbol+"&"+rand_no;
        break;
    case 1:
        div5d.innerHTML="<b>5d</b>";
        divChart.src = "http://ichart.finance.yahoo.com/w?s="+symbol+"&"+rand_no;
        break;
    case 2:
        div3m.innerHTML="<b>3m</b>";
        divChart.src = "http://chart.finance.yahoo.com/c/3m/"+url+"?"+rand_no;
        break;
    case 3:
        div6m.innerHTML="<b>6m</b>";
        divChart.src = "http://chart.finance.yahoo.com/c/6m/"+url+"?"+rand_no;
        break;
    case 5:
        div2y.innerHTML="<b>2y</b>";
        divChart.src = "http://chart.finance.yahoo.com/c/2y/"+url+"?"+rand_no;
        break;
    case 6:
        div5y.innerHTML="<b>5y</b>";
        divChart.src = "http://chart.finance.yahoo.com/c/5y/"+url+"?"+rand_no;
        break;
    case 7:
        divMax.innerHTML="<b>msx</b>";
        divChart.src = "http://chart.finance.yahoo.com/c/my/"+url+"?"+rand_no;
        break;
    case 4:
    default:
        div1y.innerHTML="<b>1y</b>";
        divChart.src = "http://chart.finance.yahoo.com/c/1y/"+url+"?"+rand_no;
        break;
    }
}