using GraphQL.Types;

namespace CharacterCreation
{
	class NoteGraph : ObjectGraphType<Note>
	{
		public NoteGraph()
		{
			Name = "Note";
			Description = "A string in a title-description pair format";

			Field(note => note.Title).Name("title");
			Field(note => note.Description).Name("description");
		}
	}
}
