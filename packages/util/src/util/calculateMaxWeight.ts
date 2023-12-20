import { WeightGroupType } from '@repo/shared-types'

export const calculateMaxWeight = (weights: WeightGroupType[]) => {
  let maxWeight = 0

  weights.forEach(weightGroup => {
    if (weightGroup.weight > maxWeight) {
      maxWeight = weightGroup.weight
    }
  })

  return maxWeight
}
