import '../App.css';


const titleNews = [
  'Путин упростил получение',
  'В команде Зеленского раскрыли какой-то там план',
  'Турпомощь чего-то там прокомментировала',
  'Суд закрыл дело демпартии США',
  'На Украине призвали создать ракеты для удара по Москве'
]

function News() {
  return (
    <div className="App-header">
 

      <div className="news">


        <div>
          
          {titleNews.map((item)=> <a href='#' className="render-block"><img src="#" alt='icon'></img><p>{item}</p></a> )}
          </div>
      </div>

    </div>
  );
}

export default News;

