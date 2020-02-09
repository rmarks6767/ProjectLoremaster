using GraphQL.Types;

namespace CharacterCreation
{
	class SkillGraph : ObjectGraphType<Skill>
	{
		public SkillGraph()
		{
			Name = "Skills";
			Description = "The skills of the character";

			Field(skill => skill.Acrobatics).Name("acrobatics");
			Field(skill => skill.AnimalHanding).Name("animalHandling");
			Field(skill => skill.Arcana).Name("arcana");
			Field(skill => skill.Athletics).Name("athletics");
			Field(skill => skill.Deception).Name("deception");
			Field(skill => skill.History).Name("history");
			Field(skill => skill.Insight).Name("insight");
			Field(skill => skill.Intimidation).Name("intimidation");
			Field(skill => skill.Investigation).Name("investigation");
			Field(skill => skill.Medicine).Name("medicine");
			Field(skill => skill.Nature).Name("nature");
			Field(skill => skill.Perception).Name("perception");
			Field(skill => skill.Performance).Name("performance");
			Field(skill => skill.Persuasion).Name("persuasion");
			Field(skill => skill.Religion).Name("religion");
			Field(skill => skill.SleightOfHand).Name("slieghtOfHand");
			Field(skill => skill.Stealth).Name("stealth");
			Field(skill => skill.Survival).Name("survival");
		}
	}
}
