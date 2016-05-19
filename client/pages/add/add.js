Template.addPage.events({
  'submit .add': function(){
    event.preventDefault()
    title = $("#addTitle").val()
    description = $("#addDescription").val()
    
    Data = {
      title: title,
      description: description
    }
    
    Events.insert( Data, { validate: true } );
    title = $("#addTitle").val("")
    description = $("#addDescription").val("")
  }
})