import socket from "@/socket";
import React, { useCallback, useEffect, useState } from "react";
import Game from "./Game";
import InitGame from "./InitGame";

function Play() {
  const [room, setRoom] = useState<string>("");
  const [orientation, setOrientation] = useState<string>("");
  const [players, setPlayers] = useState<Player[]>([]);

  const cleanup = useCallback(() => {
    setRoom("");
    setOrientation("");
    setPlayers([]);
  }, []);

  useEffect(() => {
    const opponentJoinedHandler = (roomData: RoomData) => {
      console.log("roomData", roomData);
      setPlayers(roomData.players);
    };
    socket.emit("username", "65f701293fbf6bede6f9823f");

    socket.on("opponentJoined", opponentJoinedHandler);

    return () => {
      socket.off("opponentJoined", opponentJoinedHandler);
    };
  }, []);

  return (
    <>
      {room ? (
        <Game
          room={room}
          orientation={orientation}
          username={"65f701293fbf6bede6f9823f"}
          players={players}
          // the cleanup function will be used by Game to reset the state when a game is over
          cleanup={cleanup}
        />
      ) : (
        <InitGame
          setRoom={setRoom}
          setOrientation={setOrientation}
          setPlayers={setPlayers}
        />
      )}
    </>
  );
}

export default Play;
