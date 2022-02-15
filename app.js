async function getTracks() {
  let tableBody = document.getElementById("sample-tracks");
  console.log(tableBody);

  let data = await fetch("tableData.json");
  let tracks = await data.json();

  console.log(tracks);
  tracks.map((track, index) => {
    let tableRow = document.createElement("tr");
    let trackNumber = document.createElement("td");
    let trackName = document.createElement("td");
    let trackArtist = document.createElement("td");
    let trackPlayer = document.createElement("td");

    trackNumber.innerText = index + 1;
    trackName.innerText = track.name;
    trackArtist.innerText = track.artist;

    let player = document.createElement("audio");
    player.controls = true;
    let source = document.createElement("source");
    source.src = track.link;
    source.type = "audio/mpeg";
    player.appendChild(source);
    trackPlayer.appendChild(player);

    tableRow.appendChild(trackNumber);
    tableRow.appendChild(trackName);
    tableRow.appendChild(trackArtist);
    tableRow.appendChild(trackPlayer);

    tableBody.appendChild(tableRow);
  });
}

getTracks();
