import React, { useEffect, useState } from "react";

const Home = () => {
  const [rockSongs, setRockSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [hipHopSongs, setHipHopSongs] = useState([]);

  useEffect(() => {
    fetchMusic("queen", setRockSongs);
    fetchMusic("katyperry", setPopSongs);
    fetchMusic("eminem", setHipHopSongs);
  }, []);

  const fetchMusic = async (artist, setSongs) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`
      );
      if (response.ok) {
        const { data } = await response.json();
        setSongs(data.slice(0, 4));
      }
    } catch (error) {
      console.error("Errore nel caricamento delle canzoni:", error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <main className="col-10 offset-2 p-4">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="d-flex justify-content-center gap-5 mainLinks">
                <a href="#">TRENDING</a>
                <a href="#">PODCAST</a>
                <a href="#">MOODS AND GENRES</a>
                <a href="#">NEW RELEASES</a>
                <a href="#">DISCOVER</a>
              </div>
            </div>
          </div>

          <section className="mt-4">
            <h2 className="generi">Rock Classics</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {rockSongs.map((song, index) => (
                <div key={index} className="col text-center">
                  <img
                    className="img-fluid rounded"
                    src={song.album.cover_medium}
                    alt="track"
                  />
                  <p className="mt-2">
                    <strong>Track:</strong> "{song.title}"<br />
                    <strong>Artist:</strong> {song.artist.name}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-4">
            <h2 className="generi">Pop Culture</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {popSongs.map((song, index) => (
                <div key={index} className="col text-center">
                  <img
                    className="img-fluid rounded"
                    src={song.album.cover_medium}
                    alt="track"
                  />
                  <p className="mt-2">
                    <strong>Track:</strong> "{song.title}"<br />
                    <strong>Artist:</strong> {song.artist.name}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-4">
            <h2 className="generi">#HipHop</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {hipHopSongs.map((song, index) => (
                <div key={index} className="col text-center">
                  <img
                    className="img-fluid rounded"
                    src={song.album.cover_medium}
                    alt="track"
                  />
                  <p className="mt-2">
                    <strong>Track:</strong> "{song.title}"<br />
                    <strong>Artist:</strong> {song.artist.name}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
