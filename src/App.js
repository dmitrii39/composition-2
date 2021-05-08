import './App.css';
import Header from './components/Header';
import News from './components/News';
import SearchField from './components/SearchField';
import Banner from './components/Banner';
import UnderBanner from './components/UnderBanner';



function App() {
  return (
    <div className="App-header">

      {/* самый верхний компонент с названием и датой */}
       <Header>
        <p>Сейчас в СМИ</p>
        <p>В Германии</p>
        <p>Рекомендуем</p>  
       </Header>
{/* компонент с блоком самых важных новостей */}
       <News/>

{/* поле поиска */}
       <SearchField/>

       {/* комонент с рекламой */}
       <Banner/>

       {/* блок компонентов с второстепенными новостями */}

        <div className="under-banner">

       <UnderBanner title='Погода'>
          <p>Какая то там новость1</p>
          <p>Какая то там новость2</p>
          <p>Какая то там новость3</p>
          <p>Какая то там новость4</p> 
       </UnderBanner>
       <UnderBanner title='Карта Германии'>
          <p>Какая то там новость11</p>
          <p>Какая то там новость22</p>
          <p>Какая то там новость33</p>
          <p>Какая то там новость44</p> 
       </UnderBanner>
       <UnderBanner title='Эфир'>
          <p>Какая то там новость111</p>
          <p>Какая то там новость222</p>
          <p>Какая то там новость333</p>
          <p>Какая то там новость444</p> 
       </UnderBanner>
       <UnderBanner title='Посещаемое'>
          <p>Какая то там новость 1</p>
          <p>Какая то там новость 2</p>
          <p>Какая то там новость 3</p>
          <p>Какая то там новость 4</p> 
       </UnderBanner>
       <UnderBanner title='Телепрограмма'>
          <p>Какая то там новость1</p>
          <p>Какая то там новость2</p>
          <p>Какая то там новость3</p>
          <p>Какая то там новость4</p> 
       </UnderBanner>
       </div>
    </div>
  );
}

export default App;

// {titleNews.map((item)=> <a href="#"><p></p></a> )}