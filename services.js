function payService() {
  const service = document.getElementById('serviceSelect').value;
  const amount = document.getElementById('amount').value;

  const serviceNames = {
    elektro: "Elektrodistribucija FBiH",
    vodovod: "Vodovod Zenica",
    grijanje: "Grijanje",
    mojaTV: "MojaTV / Telemach",
    alba: "ALBA"
  };

  if (!service || !amount) {
    alert("Molimo unesite sve podatke.");
    return;
  }

  alert(`Račun za ${serviceNames[service]} u iznosu od ${amount} KM je evidentiran.`);
}