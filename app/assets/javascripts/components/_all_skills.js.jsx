var AllSkills = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  handleEdit() {
  },

  onUpdate(skill) {
    this.props.onUpdate(skill);
  },

  render() {
    var skills = this.props.skills.map((skill) => {
      return (
        <div key={skill.id}>
          <Skill skill={skill}
                 handleDelete={this.handleDelete.bind(this, skill.id)}
                 handleUpdate={this.onUpdate}/>
        </div>
      )
    });

    return(
      <div>
        {skills}
      </div>
    )
  }
});
