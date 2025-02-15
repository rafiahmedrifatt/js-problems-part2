/**
 * chair ---- 3cht
 * table ----- 10cft
 * bed ----- 50cft
 */

function woodQuantity(chair, table, bed) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const AllChairWood = chair * perChairWood;
  const AllTableWood = table * perTableWood;
  const AllBedWood = bed * perBedWood;

  const totalWood = AllBedWood + AllChairWood + AllTableWood;
  return totalWood;
}

const wood = woodQuantity(8, 2, 2);
console.log(wood);
