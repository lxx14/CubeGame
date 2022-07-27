export interface IUsersState {
  users: {
    link?: [
      {
        url?: string;
      },
    ];
    entry?: [
      {
        oneup_user_id?: string;
        app_user_id?: string;
        active?: boolean;
      },
    ];
  };
  authCode?: {
    success?: boolean;
    code?: string;
    oneup_user_id?: string;
    app_user_id?: string;
  };
  tokenData?: {
    access_token?: string;
    token_type?: string;
    expires_in?: number;
    refresh_token?: string;
  };
  clinicals?: [
    {
      id?: number;
      name?: string;
      resource_url?: string;
      logo?: string;
      api_version?: string;
      status?: string;
      ehr?: string;
      locations?: [
        {
          name?: string;
          address?: {
            line?: string[];
            city?: string;
            postalCode?: string;
            state?: string;
          };
        },
      ];
    },
  ];
  testClinicConnectData?: string;
  patientData?: any;
}
