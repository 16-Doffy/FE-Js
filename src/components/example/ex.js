import "./App.css";
import Toggle from "./components/state/Toggle";
import YtList from "./components/youtube/ytList";

function Kipw() {
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
    <div> 
      {/* <YtList>
    {name}
      
       </YtList> */}

       <Toggle />
    </div>
  );
}

export default Kipw;
//children middle YtList