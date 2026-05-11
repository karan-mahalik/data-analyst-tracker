export const saveData = (key, value) => {

  try {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  } catch (error) {

    console.error(
      "Error Saving To LocalStorage:",
      error
    );
  }
};

export const loadData = (key) => {

  try {

    const data =
      localStorage.getItem(key);

    if (!data) return null;

    return JSON.parse(data);

  } catch (error) {

    console.error(
      "Error Loading From LocalStorage:",
      error
    );

    return null;
  }
};

export const removeData = (key) => {

  try {

    localStorage.removeItem(key);

  } catch (error) {

    console.error(
      "Error Removing LocalStorage Data:",
      error
    );
  }
};

export const clearAllData = () => {

  try {

    localStorage.clear();

  } catch (error) {

    console.error(
      "Error Clearing LocalStorage:",
      error
    );
  }
};