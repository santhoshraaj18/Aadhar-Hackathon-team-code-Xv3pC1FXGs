async function getData() {
    const res = await fetch("https://stage1.uidai.gov.in/onlineekyc/getOtp/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        uid: "999942263368",
        txnId: "39aaa464-6d0c-452b-a4ee-ad1c8a162a73",
      }),
    });
  
    return res.json();
  }
  
  getData().then(function (data) {
    console.log(data);
  });