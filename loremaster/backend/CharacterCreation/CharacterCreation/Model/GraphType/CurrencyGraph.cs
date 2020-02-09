using GraphQL.Types;

namespace CharacterCreation
{
	class CurrencyGraph : ObjectGraphType<Currency>
	{
		public CurrencyGraph()
		{
			Name = "Currency";
			Description = "The currency held by the character";

			Field(currency => currency.Copper).Name("copper");
			Field(currency => currency.Silver).Name("silver");
			Field(currency => currency.Electrum).Name("electrum");
			Field(currency => currency.Gold).Name("gold");
			Field(currency => currency.Platinum).Name("platinum");
		}
	}
}
