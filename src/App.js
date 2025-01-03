import "./App.css";
import { YtData } from "./YutData";


function App() {
  // const number = [1,2,3,4,5];
  // const double = number.map(item => item * 2);
  // console.log(double);
  // console.log(YtData);
  // return (
  //   <div className="yt-list">
  //     {YtData.map((item, index) => ( //rendering map/list
  //       <Demo
  //         key={item.id}
  //         image={item.image}
  //         title={item.title}  
  //         auth={item.auth}
  //         avatar={item.avatar || item.image}
  //       />
  //     ))}
  //   </div>
  // );
  return (
    <div className="yt-list">
      {YtData.map((item, index) => {
        const newClass = '';
        
      
       return ( //rendering map/list
          <Demo
            key={item.id}
            image={item.image}
            title={item.title}
            auth={item.auth}
            avatar={item.avatar || item.image}
           
          />
        );
      })}
    </div>
  );

}

function Demo(props) {
  console.log(props);
  return (
    <>
      <div className={`yt-item ${props.className}`}>
        <div className="yt-img">
          <img src={props.image} alt="img" />
        </div>

        <div className="yt-footer">
          <img
            src={props.avatar}
            alt=""
            className="yt-avatar"
          />
          <div className="yt-avatar">
            <h3 className="yt-title">{props.title || "Idol"}</h3>
            <h4 className="yt-auth">{props.auth || "Sayuri"}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
