var headerText = `<header class="header">
        <div class="container">
            <div class="header_inner">
                <div class="header_logo"><h1><a href="index.html" style="text-decoration: none; color: cornsilk;"><i class="fa  fa-rub"></i>RuCompany</a></h1></div>
                <div class="srch">
                    <form>
                    <input id="mySearch" type="search" onkeyup="myFunction()" placeholder="Поиск...">
                    <button type="submit"></button>
                    </form>
                </div>
            </div>
            <div>
                <nav class="nav four">
                    <ul class="nav_topmenu" style="color: rgb(51, 51, 51);">
                        <li><a class="nav_link" href="big.html" title="Топ 5 крупнейших компаний России">Крупнейшие</a></li>
                        <li><a class="nav_link" href="rich.html" title="Топ 5 самых дорогих компаний Рунета">Дорожайшие</a></li>
                        <li><a class="nav_link" href="fast.html" title="Топ 5 самых быстрорастущих компаний России">Быстрорастущие</a></li>
                        <li><a class="nav_link" href="stocks.html" title="Топ 5 самых перспективных акций российских компаний">Акции</a></li>
                        <li><a class="nav_link" href="about.html" title="Информация о создателе и источниках">О сайте</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>`;

function setHeader() {
  var header =  document.createElement("div");
  header.innerHTML = headerText ;
  document.body.insertAdjacentElement('afterbegin', header );
}

setHeader();

var footerText = `<footer class="footer">
<div class="footer_text">
    <p>Выполнил: Федоров Михаил Артемович <br>
    Группа: 1ПИб-01-1оп-21 </p>
</div>
</footer>`;

function setFooter() {
  var footer =  document.createElement("div");
  footer.innerHTML = footerText ;
  document.body.insertAdjacentElement('beforeend', footer );
}

setFooter();
