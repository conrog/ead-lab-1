//Function for populating table with data
async function getTracks() {
  let tableBody = document.getElementById("sample-tracks");

  let data = await fetch("tableData.json");
  let tracks = await data.json();

  tracks.forEach((track, index) => {
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

//Function for displaying toast after send email button is pressed
function simulateSendingEmail() {
  let modal = bootstrap.Modal.getInstance(
    document.getElementById("email-modal")
  );
  var toastElement = document.getElementById("email-toast");
  let toast = new bootstrap.Toast(toastElement);

  modal.hide();

  document.getElementById("email-address").value = "";
  document.getElementById("email-subject").value = "";
  document.getElementById("email-body").value = "";

  toast.show();
}

getTracks();

//Button Listeners
document
  .getElementById("send-email-button")
  .addEventListener("click", simulateSendingEmail);
