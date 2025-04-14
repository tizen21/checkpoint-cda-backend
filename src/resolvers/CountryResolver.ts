import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { AppDataSource } from "../data-source";
import { Country } from "../entities/Country";

@Resolver()
export class CountryResolver {
  @Query(() => [Country])
  async getAllCountries() {
    const repo = AppDataSource.getRepository(Country);
    return repo.find();
  }

  @Query(() => Country, { nullable: true })
  async getCountryByCode(@Arg("code") code: string) {
    const repo = AppDataSource.getRepository(Country);
    return repo.findOneBy({ code });
  }

  @Query(() => [Country])
  async getCountriesByContinent(@Arg("continent") continent: string) {
    const repo = AppDataSource.getRepository(Country);
    return repo.findBy({ continent });
  }

  @Mutation(() => Country)
  async addCountry(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("emoji") emoji: string,
    @Arg("continent") continent: string
  ): Promise<Country> {
    const repo = AppDataSource.getRepository(Country);
    const country = repo.create({ code, name, emoji, continent });
    return repo.save(country);
  }
}
