import { environment } from '../environments/environment'

export class apiUrls {
    BASE_URL = environment.HOST_URL + '/api';

    public GET = { 
        STATES : this.BASE_URL + '/v2/admin/location/states',
        PINDATA : this.BASE_URL + '/v2/appointment/sessions/public/findByPin',
        DISTDATA : this.BASE_URL + '/v2/appointment/sessions/public/findByDistrict',
        DISTRICTS : this.BASE_URL + '/v2/admin/location/districts'
    }
} 