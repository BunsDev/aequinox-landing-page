import { Flex, Grid, Heading } from "@chakra-ui/react";
import poolsLiquidity from "../../../public/pools-liquidity.svg";
import poolsStable from "../../../public/pools-stable.svg";
import poolsMulti from "../../../public/pools-multi.svg";
import poolsSmart from "../../../public/pools-smart.svg";
import poolsWeighted from "../../../public/pools-weighted.svg";
import { PoolCard } from "./PoolCard";

export function Pools() {
  return (
    <Flex
      as="section"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginBottom="144px"
    >
      <Heading
        as="h2"
        fontSize="5xl"
        fontWeight={900}
        paddingBottom={"72px"}
        textAlign="center"
        textShadow={"0px 2px 0px rgba(0, 0, 0, 0.25)"}
      >
        Unique pool types for your needs
      </Heading>

      <Grid
        templateRows={{ base: "repeat(5, 1fr)", md: "repeat(3, 1fr)" }}
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        columnGap="44px"
        rowGap={14}
      >
        <PoolCard
          colSpan={1}
          icon={poolsWeighted}
          title="Oracle Weighted Pools"
          text="Adjust the ratio of tokens according to which you would like to hold more of, while still earning liquidity provider fees."
        />
        <PoolCard
          colSpan={1}
          icon={poolsStable}
          title="Stable Pools"
          text="Hardcoded math that ensures price stability regardless of liquidity."
        />
        <PoolCard
          colSpan={1}
          icon={poolsMulti}
          title="Multi-Token Pools"
          text="Create liquidity pools with up to 8 tokens and earn liquidity provider fees while holding a variety of crypto assets."
          headingProps={{ flex: 1 }}
        />
        <PoolCard
          colSpan={1}
          icon={poolsLiquidity}
          title="Liquidity Bootstrapping Pools"
          text="Build on our platform with lower initial capital requirements that scale into higher liquidity across time."
        />
        <PoolCard
          colSpan={{ base: 1, md: 2 }}
          icon={poolsSmart}
          title="Smart Pools"
          text="Create liquidity pools with their own internal logic that act as trustless asset managers."
        />
      </Grid>
    </Flex>
  );
}
