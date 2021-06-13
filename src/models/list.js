import { HTTP } from 'utils/http';
import config from 'utils/config';


class ListModel extends HTTP {
    getListData(field, cityId) {
        return new Promise((resolve, reject) => {
            this.axiosPost({
                url: config.API.GET_LIST_DATAS,
                data: {
                    field,
                    cityId
                },
                success(data) {
                    resolve({
                        data,
                        status: 0
                    })
                },
                error(err) {
                    resolve({

                        status: -1
                    })
                }
            })
        })

    }
}


export { ListModel };