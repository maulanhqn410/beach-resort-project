import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";
import { RoomConsumer, RoomContext } from "../context";
import Title from "./Title";


export default class RoomContainer extends React.Component{
  static contextType = RoomContext;
  render() {
    const {loading, rooms, sortRooms} = this.context;
    console.log(rooms);
    if(loading){
      return <Loading />
    }
    return (
      <>
        <RoomFilter rooms={rooms} />
        <RoomList rooms={sortRooms} />
      </>
    );
  }
}

//Cach 1
// export default function RoomContainer() {
//   return (
//     <div>
//       <RoomConsumer>
//         {value => {
//           const {loading, rooms, sortRooms} = value;
//           if(loading){
//             return <Loading />
//           }
//           return (
//             <div>
//               <RoomFilter rooms={rooms}/>
//               <RoomList rooms={sortRooms}/>
//             </div>
//           );
//         }}
//       </RoomConsumer>
//     </div>
//   );
// }
