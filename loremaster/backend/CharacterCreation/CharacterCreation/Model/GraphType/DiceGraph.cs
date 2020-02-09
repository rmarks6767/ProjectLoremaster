using GraphQL.Types;

namespace CharacterCreation
{
	class DiceGraph : ObjectGraphType<Dice>
	{
		public DiceGraph()
		{
			Name = "Dice";
			Description = "Dice that can be rolled";

			Field(dice => dice.NumberOfDice).Name("numberOfDice");
			Field(dice => dice.SizeOfDice).Name("sizeOfDice");
		}
	}
}
