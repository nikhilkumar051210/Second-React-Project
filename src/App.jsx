 const App = () =>{
  return (
       <div>
          <NetflixSeries/> 
          <NetflixSeries/>
          <NetflixSeries/>
          <NetflixSeries/>
          <NetflixSeries/>
       </div>
  );
};

const NetflixSeries = () =>{    
  return (
     <div>
        <div>
          <img src="qot.png" alt="queen of tears" height="20%" width="100%" />
        </div>

          <h2>Name : Queen of Tears</h2>
          <h3>Rating : 8.2</h3>
          <p>Queen of Tears follows Baek Hyun-woo and Hong Hae-in, a married couple whose relationship has become distant.
Hae-in discovers that she has a serious illness, making Hyun-woo realize how much he still loves her.
Together, they face family conflicts, betrayal, and a dangerous rival trying to take control of Hae-in’s family.
Through these struggles, they rediscover their love and fight to stay together.</p>
        </div>
  );
};

export default App;







