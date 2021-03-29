export const generateRPS = () => {
    const rand = Math.random()
    return (rand >= 0 && rand < 0.3333) ? 'rock': (rand >=0.3333 && rand<0.6666)?'paper' : 'scissors'
}