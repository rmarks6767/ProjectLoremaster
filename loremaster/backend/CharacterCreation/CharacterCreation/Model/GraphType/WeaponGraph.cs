using GraphQL.Types;

namespace CharacterCreation
{
	class WeaponGraph : ObjectGraphType<Weapon>
	{
		public WeaponGraph()
		{
			Name = "Weapon";
			Description = "A weapon a character can yeild";

			Field(weapon => weapon.Name).Name("name");
			Field(weapon => weapon.AttackBonus).Name("attackBonue");
			Field<DiceGraph>().Name("damage");
			Field<DamageTypeEnum>().Name("damageType");
			Field<ListGraphType<WeaponPropertyEnum>>().Name("properties");
		}
	}
}
