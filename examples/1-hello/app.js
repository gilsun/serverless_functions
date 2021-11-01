const result = document.querySelector(".result");

const fetchData = async () => {
  console.log("fetch data called ");

  try {
    // const { data } = await axios.get("/.netlify/functions/1-hello");
    const { data } = await axios.get("/api/1-hello");

    
    result.textContent = data;
    console.log("data", data);
  } catch (error) {
    console.log("error.response.data:", error.response.data);
    result.textContent = error.response.data;
  }

  // const response = await fetch("/api/hello");
  // const data = await response.json();
  // result.innerHTML = data.message;
};

fetchData();
