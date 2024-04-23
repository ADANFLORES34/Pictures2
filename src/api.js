import axios from 'axios'

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=iqtnrmZTn41GZ3qw--GbVGyywqo8He12uGFt03fg2BM'
    const response = await axios.get(url, {
        params: {
            query: 'cars'
        }
    })

    console.log(response)

}

export default searchImage