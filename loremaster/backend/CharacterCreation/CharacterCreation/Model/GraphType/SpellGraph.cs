using GraphQL.Types;

namespace CharacterCreation
{
	class SpellGraph : ObjectGraphType<Spell>
	{
		public SpellGraph()
		{
			Name = "Spell";
			Description = "A spell the character can cast";

			Field<NoteGraph>().Name("description");
			Field(spell => spell.Level).Name("level");
			Field<SchoolOfMagicEnum>().Name("schoolOfMagic");
			Field(spell => spell.Range).Name("range");
			Field(spell => spell.ComponentVerbal).Name("verbalComponent");
			Field(spell => spell.CompnentSomatic).Name("somaticComponent");
			Field<ListGraphType<StringGraphType>>().Name("materialComponent");
			Field<CastingTimeEnum>().Name("castingTime");
			Field<AreaOfEffectEnum>().Name("areaOfEffect");
			Field(spell => spell.IsPrepared).Name("isPrepared");
			Field(spell => spell.IsConcentration).Name("isPrepared");
			Field(spell => spell.IsRitual).Name("isPrepared");
		}
	}
}
