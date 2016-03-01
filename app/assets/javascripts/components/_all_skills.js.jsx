var AllSkills = React.createClass({

  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { console.table(response) });
  },

  render() {
    return (
      <div>
        <h1>Sekhar has All Skills.</h1>
      </div>
    )
  }
});
