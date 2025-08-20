function openSMS() {
  const reg = document.getElementById('regPlate').value;
  const zone = document.getElementById('zoneSelect').value;

  if (!reg || !zone) {
    alert("Unesite registraciju i odaberite zonu.");
    return;
  }

  const smsNumbers = {
    I: "0832001",
    II: "0832002",
    III: "0832003"
  };

  const smsNumber = smsNumbers[zone];
  const smsBody = encodeURIComponent(reg);

  // Otvara SMS aplikaciju sa brojem i porukom
  window.location.href = `sms:${smsNumber}?body=${smsBody}`;
}