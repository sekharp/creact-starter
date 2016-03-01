var NewSkill = React.createClass({
  handleClick() {
    var name    = this.refs.name.value;
    var details = this.refs.details.value;

    $.ajax({
      url: '/api/v1/skills',
      type: 'POST',
      data: { skill: { name: name, details: details } },
      success: (skill) => {
        this.props.handleSubmit(skill);
      }
    });
  },

  render() {
    return (
      <div>
      <h2>Enter A New Skill</h2>
        <input ref='name' placeholder='Enter Name of Skill' />
        <input ref='details' placeholder='Details' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
