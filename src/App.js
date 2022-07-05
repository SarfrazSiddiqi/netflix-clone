import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Nav/>
        <Banner/>
     <h2>lets build netflix clone</h2>
      <Row 
      title='Netflix Original' 
      fetchUrl={requests.fetchNetflixOriginals} 
      />
      <Row 
      title='Trending Now' 
      fetchUrl={requests.fetchTrending} 
      />
      <Row 
      title='Top Rated' 
      fetchUrl={requests.fetchTopRated} 
      />
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <h2>Made by Sarfraz Siddiqi</h2>
      <p>Email: sarfrazsiddiqi19@gmail.com</p>
      </header>
    </div>
  );
}

export default App;
