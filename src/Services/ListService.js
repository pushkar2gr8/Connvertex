export default class ListService {
  list = [];
  response = {};

  getNotes = async () => {
    this.response = await fetch('http://heimdall3.ddns.net:8080/notes', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });

    return await this.response.json();
  };

  addNote = async (title, category, notes) => {
    console.log();
    this.response = await fetch('http://heimdall3.ddns.net:8080/notes', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        category: category,
        notes: notes,
      }),
    });
    return await this.response.json();
  };

  updateNote = async (id, title, category, notes) => {
    this.response = await fetch('http://heimdall3.ddns.net:8080/notes/' + id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        category: category,
        notes: notes,
      }),
    });
    return await this.response.json();
  };

  getNote = async id => {
    this.response = await fetch('http://heimdall3.ddns.net:8080/notes/' + id, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    return await this.response.json();
  };

  deleteNote = async id => {
    this.response = await fetch('http://heimdall3.ddns.net:8080/notes/' + id, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    });
    return await this.response.json();
  };
}
