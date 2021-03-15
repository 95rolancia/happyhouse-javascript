const api = {
  fetchXML: async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "text/xml");
        return xml;
      } else {
        const errorData = await response.text();
        throw errorData;
      }
    } catch (err) {
      throw {
        message: err.message,
        status: err.status,
      };
    }
  },

  fetchJSON: async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const errorData = await response.json();
        throw errorData;
      }
    } catch (err) {
      throw {
        message: err.message,
        status: err.status,
      };
    }
  },
  fetchGetLoc: async (address) => {
    try {
      const [a, b] = address.split(" ");
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${a}+${b}&key=AIzaSyC2AqNrWjzHI-SmVRPjBHuzhUraRdNFVUw`
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const errorData = await response.json();
        throw errorData;
      }
    } catch (err) {
      throw {
        message: err.message,
        status: err.status,
      };
    }
  },
};

export { api };
