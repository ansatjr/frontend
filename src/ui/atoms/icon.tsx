import React from "react";
import styled from "styled-components";

interface Props extends React.SVGAttributes<SVGElement> {
  name:
    | "rocket"
    | "logo"
    | "loupe"
    | "attachment"
    | "smile"
    | "microphone"
    | "telegram"
    | "pause"
    | "wave"
    | "check"
    | "double-check"
    | "picture"
    | "cross";
  gray?: boolean;
}

const getIcon = ({name, ...props}: Props) => {
  switch (name) {
    case "rocket":
      return (
        <Svg
          width="200"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          {...props}
        >
          <g>
            <g>
              <path
                d="M221.867,341.333h-102.4c-4.71,0-8.533,3.823-8.533,8.533V384c0,4.71,3.823,8.533,8.533,8.533h102.4
			c4.71,0,8.533-3.823,8.533-8.533v-34.133C230.4,345.156,226.577,341.333,221.867,341.333z M213.333,375.467H128V358.4h85.333
			V375.467z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M196.267,375.467H128c-4.71,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.823,8.533,8.533,8.533h68.267
			c4.71,0,8.533-3.823,8.533-8.533V384C204.8,379.29,200.977,375.467,196.267,375.467z M187.733,409.6h-51.2v-17.067h51.2V409.6z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M162.133,93.867C142.677,93.867,128,119.543,128,153.6c0,4.71,3.823,8.533,8.533,8.533h51.2
			c4.71,0,8.533-3.823,8.533-8.533C196.267,119.543,181.589,93.867,162.133,93.867z M145.442,145.067
			c1.894-21.086,10.522-34.133,16.691-34.133s14.797,13.047,16.691,34.133H145.442z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M380.809,303.394l-52.437-43.699c-18.876-15.735-29.705-38.852-29.705-63.428c0-3.772-0.23-92.8-20.267-124.16
			c-4.958-7.748-13.329-12.373-22.4-12.373c-9.079,0-17.451,4.625-22.4,12.373c-20.036,31.36-20.267,120.388-20.267,124.16
			c0,24.585-10.829,47.701-29.705,63.428l-52.437,43.699c-12.877,10.718-20.258,26.487-20.258,43.247v3.226
			c0,4.71,3.823,8.533,8.533,8.533h93.867V384c0,4.71,3.823,8.533,8.533,8.533h68.267c4.71,0,8.533-3.823,8.533-8.533v-25.6h93.867
			c4.71,0,8.533-3.823,8.533-8.533v-3.226C401.067,329.882,393.685,314.112,380.809,303.394z M290.133,341.333
			c-4.71,0-8.533,3.823-8.533,8.533v25.6h-51.2v-25.591c0-4.71-3.823-8.533-8.533-8.533h-93.508
			c1.306-9.66,6.153-18.509,13.756-24.841l52.437-43.699c22.784-18.978,35.849-46.874,35.849-76.535
			c0-24.328,3.174-92.416,17.579-114.97c3.593-5.632,12.433-5.632,16.034,0c14.413,22.545,17.587,90.633,17.587,114.97
			c0,29.662,13.065,57.557,35.849,76.527l52.437,43.699c7.595,6.34,12.45,15.189,13.756,24.841H290.133z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M392.533,341.333h-102.4c-4.71,0-8.533,3.823-8.533,8.533V384c0,4.71,3.823,8.533,8.533,8.533h102.4
			c4.71,0,8.533-3.823,8.533-8.533v-34.133C401.067,345.156,397.244,341.333,392.533,341.333z M384,375.467h-85.333V358.4H384
			V375.467z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M384,375.467h-68.267c-4.71,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.823,8.533,8.533,8.533H384
			c4.71,0,8.533-3.823,8.533-8.533V384C392.533,379.29,388.71,375.467,384,375.467z M375.467,409.6h-51.2v-17.067h51.2V409.6z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M349.867,93.867c-19.456,0-34.133,25.677-34.133,59.733c0,4.71,3.823,8.533,8.533,8.533h51.2
			c4.71,0,8.533-3.823,8.533-8.533C384,119.543,369.323,93.867,349.867,93.867z M333.175,145.067
			c1.894-21.086,10.522-34.133,16.691-34.133c6.17,0,14.797,13.047,16.691,34.133H333.175z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M281.6,375.467h-51.2c-4.71,0-8.533,3.823-8.533,8.533v51.2c0,4.71,3.823,8.533,8.533,8.533h51.2
			c4.71,0,8.533-3.823,8.533-8.533V384C290.133,379.29,286.31,375.467,281.6,375.467z M273.067,426.667h-34.133v-34.133h34.133
			V426.667z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M221.867,273.067c-4.71,0-8.533,3.823-8.533,8.533v68.267c0,4.71,3.823,8.533,8.533,8.533c4.71,0,8.533-3.823,8.533-8.533
			V281.6C230.4,276.89,226.577,273.067,221.867,273.067z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M290.133,273.067c-4.71,0-8.533,3.823-8.533,8.533v68.267c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533V281.6
			C298.667,276.89,294.844,273.067,290.133,273.067z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M375.458,145.067h-51.2c-4.71,0-8.533,3.823-8.533,8.533v113.792c0,2.534,1.126,4.932,3.072,6.554l50.91,42.419
			c0.145,0.128,0.299,0.256,0.427,0.358c1.544,1.229,3.43,1.869,5.333,1.869c1.254,0,2.517-0.282,3.686-0.853
			c2.961-1.417,4.838-4.412,4.838-7.689V153.6C383.992,148.89,380.169,145.067,375.458,145.067z M366.933,291.823L332.8,263.381
			V162.133h34.133V291.823z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M187.733,145.067h-51.2c-4.71,0-8.533,3.823-8.533,8.533v156.459c0,3.277,1.877,6.272,4.838,7.689
			c1.178,0.563,2.44,0.845,3.695,0.845c1.903,0,3.789-0.64,5.333-1.877c0.128-0.102,0.273-0.23,0.418-0.358l50.91-42.428
			c1.946-1.621,3.072-4.019,3.072-6.554V153.6C196.267,148.89,192.444,145.067,187.733,145.067z M179.2,263.381l-34.133,28.442
			v-129.69H179.2V263.381z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M260.386,1.22c-2.705-1.621-6.076-1.621-8.781,0C210.586,25.83,179.2,48.913,179.2,102.4v164.983
			c0,3.311,1.92,6.323,4.924,7.731c1.152,0.538,2.381,0.802,3.61,0.802c1.963,0,3.908-0.683,5.47-1.988l1.357-1.135
			c22.775-18.987,35.84-46.874,35.84-76.527c0-24.328,3.174-92.416,17.579-114.97c3.593-5.632,12.433-5.623,16.034,0
			c14.413,22.545,17.587,90.633,17.587,114.97c0,29.662,13.065,57.557,35.84,76.535l1.365,1.126
			c2.534,2.116,6.084,2.577,9.079,1.178c2.995-1.408,4.915-4.42,4.915-7.731V102.4C332.8,48.913,301.414,25.839,260.386,1.22z
			 M315.733,246.562c-10.991-14.285-17.067-31.88-17.067-50.295c0-3.772-0.23-92.8-20.267-124.16
			c-4.958-7.748-13.329-12.373-22.4-12.373c-9.079,0-17.451,4.625-22.4,12.373c-20.036,31.36-20.267,120.388-20.267,124.16
			c0,18.415-6.076,36.011-17.067,50.287V102.4c0-39.748,18.475-58.65,59.733-83.891c41.259,25.233,59.733,44.143,59.733,83.891
			V246.562z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M256,426.667c-14.592,0-25.6,18.338-25.6,42.667S241.408,512,256,512s25.6-18.338,25.6-42.667
			S270.592,426.667,256,426.667z M256,494.933c-2.125,0-8.533-9.079-8.533-25.6c0-16.521,6.409-25.6,8.533-25.6
			s8.533,9.079,8.533,25.6C264.533,485.854,258.125,494.933,256,494.933z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M296.021,144.256c-1.246-13.082-2.893-24.841-4.89-34.97c-0.785-4.002-4.292-6.886-8.371-6.886H229.24
			c-4.079,0-7.586,2.884-8.38,6.886c-1.997,10.163-3.644,21.931-4.89,34.97c-0.23,2.398,0.563,4.779,2.185,6.554
			c1.621,1.775,3.908,2.79,6.315,2.79h63.053c2.406,0,4.702-1.007,6.315-2.79C295.458,149.035,296.252,146.654,296.021,144.256z
			 M233.958,136.533c0.708-6.059,1.51-11.759,2.406-17.067h39.287c0.887,5.291,1.69,10.999,2.398,17.067H233.958z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M196.267,443.733c-4.77,0-8.533,0-8.533-25.6c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533
			c0,15.957,0,42.667,25.6,42.667c4.71,0,8.533-3.823,8.533-8.533C204.8,447.556,200.977,443.733,196.267,443.733z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M179.2,494.933H17.067v-50.099c0-8.892,6.059-16.597,14.106-17.929c9.301-1.57,17.971,4.471,19.695,13.679
			c0.606,3.243,3.029,5.845,6.229,6.682c3.208,0.845,6.588-0.239,8.704-2.782c4.941-5.897,12.058-9.284,19.533-9.284
			c9.574,0,18.278,5.274,22.707,13.773c3.831,7.339,11.588,11.716,19.883,11.682c8.311-0.137,15.676-4.779,19.209-12.126
			c4.232-8.789,6.468-19.302,6.468-30.396c0-4.71-3.823-8.533-8.533-8.533c-4.71,0-8.533,3.823-8.533,8.533
			c0,8.431-1.698,16.597-4.779,22.989c-1.05,2.185-3.217,2.449-4.105,2.466c-0.657,0.077-3.226-0.128-4.48-2.517
			c-7.39-14.148-21.88-22.938-37.837-22.938c-8.141,0-16,2.364-22.75,6.69c-7.194-10.906-20.318-17.015-34.176-14.754
			C12.211,412.732,0,427.674,0,444.826v58.641C0,508.177,3.823,512,8.533,512H179.2c4.71,0,8.533-3.823,8.533-8.533
			S183.91,494.933,179.2,494.933z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M332.8,409.6c-4.71,0-8.533,3.823-8.533,8.533c0,25.6-3.763,25.6-8.533,25.6c-4.71,0-8.533,3.823-8.533,8.533
			c0,4.71,3.823,8.533,8.533,8.533c25.6,0,25.6-26.709,25.6-42.667C341.333,413.423,337.51,409.6,332.8,409.6z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M483.601,410.069c-13.841-2.244-26.982,3.849-34.176,14.763c-6.758-4.335-14.618-6.699-22.758-6.699
			c-15.957,0-30.447,8.789-37.837,22.946c-1.254,2.389-3.746,2.568-4.48,2.517c-0.879-0.017-3.055-0.29-4.105-2.466
			c-3.081-6.4-4.779-14.566-4.779-22.997c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533
			c0,11.102,2.236,21.606,6.46,30.396c3.533,7.347,10.897,11.989,19.208,12.126c8.405,0.008,16.051-4.344,19.883-11.682
			c4.437-8.499,13.141-13.773,22.716-13.773c7.467,0,14.592,3.388,19.524,9.284c2.125,2.543,5.513,3.627,8.704,2.782
			c3.2-0.828,5.623-3.439,6.229-6.682c1.724-9.216,10.394-15.249,19.703-13.679c8.047,1.323,14.106,9.028,14.106,17.92v50.108H332.8
			c-4.71,0-8.533,3.823-8.533,8.533S328.09,512,332.8,512h170.667c4.71,0,8.533-3.823,8.533-8.533v-58.633
			C512,427.682,499.789,412.732,483.601,410.069z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M51.2,13.534L13.534,51.2L51.2,88.866L88.866,51.2L51.2,13.534z M37.666,51.2L51.2,37.666L64.734,51.2L51.2,64.734
			L37.666,51.2z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M51.2,0c-4.71,0-8.533,3.823-8.533,8.533V25.6c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533V8.533
			C59.733,3.823,55.91,0,51.2,0z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M93.867,42.667H76.8c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h17.067c4.71,0,8.533-3.823,8.533-8.533
			S98.577,42.667,93.867,42.667z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M51.2,68.267c-4.71,0-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533V76.8
			C59.733,72.09,55.91,68.267,51.2,68.267z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M25.6,42.667H8.533C3.823,42.667,0,46.49,0,51.2s3.823,8.533,8.533,8.533H25.6c4.71,0,8.533-3.823,8.533-8.533
			S30.31,42.667,25.6,42.667z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M503.467,247.467c-18.825,0-34.133-15.309-34.133-34.133c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533
			c0,18.825-15.309,34.133-34.133,34.133c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533
			c18.825,0,34.133,15.309,34.133,34.133c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533
			c0-18.825,15.309-34.133,34.133-34.133c4.71,0,8.533-3.823,8.533-8.533S508.177,247.467,503.467,247.467z M460.8,270.396
			c-3.797-5.7-8.695-10.607-14.396-14.396c5.7-3.789,10.607-8.687,14.396-14.396c3.797,5.7,8.695,10.607,14.396,14.396
			C469.495,259.797,464.589,264.695,460.8,270.396z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </Svg>
      );

    case "logo":
      return (
        <Svg
          width="60"
          height="60"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g>
            <path
              d="m321.122 154.788c-33.498 11.166-69.181 34.552-100.478 65.848-27.755 27.756-33.967 65.027-14.142 84.854 5.95 5.95 13.581 9.644 22.31 10.962-22.794 14.623-45.641 24.142-65.604 26.923-4.774-10.254-15.172-17.383-27.208-17.383-6.179 0-11.926 1.879-16.704 5.094-13.568-17.273-9.749-50.813 10.024-88.032 2.384.612 4.881.938 7.453.938 16.542 0 30-13.458 30-30 0-6.458-2.058-12.44-5.543-17.341 5.357-6.303 11.042-12.493 16.989-18.44 38.052-38.053 83.52-63.615 118.66-66.712 5.501-.484 9.568-5.337 9.083-10.839-.484-5.501-5.335-9.571-10.839-9.083-40.208 3.542-89.197 30.643-131.046 72.491-6.765 6.766-13.212 13.832-19.258 21.028-2.562-.714-5.258-1.104-8.045-1.104-16.542 0-30 13.458-30 30 0 6.665 2.188 12.828 5.879 17.813-11.909 21.937-19.146 43.415-20.983 62.398-2.168 22.402 3.209 40.846 15.537 53.389-.779 2.668-1.205 5.483-1.205 8.399 0 16.542 13.458 30 30 30 14.022 0 25.824-9.671 29.096-22.692 39.275-5.15 85.938-31.632 126.26-71.953 27.756-27.756 33.968-65.028 14.142-84.853-5.97-5.969-13.635-9.661-22.399-10.968 14.869-9.538 29.865-16.936 44.348-21.763 27.86-9.288 50.79-7.668 62.903 4.447 19.542 19.542 11.165 64.682-20.084 111.396-4.245-2.304-9.105-3.614-14.265-3.614-16.542 0-30 13.458-30 30 0 7.138 2.51 13.698 6.688 18.854-22.865 22.648-48.074 40.779-72.993 52.465-23.58 11.058-45.576 15.529-61.93 12.601-5.436-.98-10.633 2.641-11.608 8.078s2.642 10.633 8.079 11.607c4.487.805 9.2 1.204 14.118 1.204 17.759 0 38.148-5.213 59.832-15.382 27.392-12.846 54.964-32.73 79.738-57.504.815-.815 1.627-1.638 2.436-2.463 1.828.35 3.712.54 5.641.54 16.542 0 30-13.458 30-30 0-3.856-.74-7.542-2.071-10.931 18.321-26.314 30.387-52.852 34.917-76.927 5.15-27.372.186-49.525-14.354-64.065-17.932-17.928-47.538-21.224-83.374-9.28zm-184.349 49.203c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10c-.001-5.514 4.485-10 10-10zm-.773 162c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm131.961-150.195c2.076-.415 4.79-.799 7.737-.799 5.25 0 11.237 1.218 15.657 5.638 11.499 11.498 5.022 37.404-14.143 56.568-9.952 9.952-21.733 16.693-33.174 18.981-5.776 1.153-16.493 2.062-23.394-4.839-11.499-11.499-5.023-37.404 14.142-56.568 9.953-9.951 21.735-16.692 33.175-18.981zm88.039 110.195c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z"/>
            <path
              d="m267.093 267.083c9.19-9.189 11.673-21.605 5.546-27.732-6.126-6.126-18.542-3.643-27.732 5.546s-11.673 21.605-5.546 27.732c6.126 6.127 18.542 3.644 27.732-5.546z"/>
            <path
              d="m502 405.991c-16.542 0-30-13.458-30-30 0-5.522-4.478-10-10-10s-10 4.478-10 10c0 16.542-13.458 30-30 30-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 16.542 0 30 13.458 30 30 0 5.523 4.478 10 10 10s10-4.477 10-10c0-16.542 13.458-30 30-30 5.522 0 10-4.477 10-10s-4.478-10-10-10z"/>
            <path
              d="m60 135.991c0-16.542 13.458-30 30-30 5.523 0 10-4.478 10-10s-4.477-10-10-10c-16.542 0-30-13.458-30-30 0-5.522-4.477-10-10-10s-10 4.478-10 10c0 16.542-13.458 30-30 30-5.523 0-10 4.478-10 10s4.477 10 10 10c16.542 0 30 13.458 30 30 0 5.522 4.477 10 10 10s10-4.478 10-10z"/>
            <path
              d="m486 235.991c0-13.106-8.451-24.268-20.186-28.343-1.903-44.814-18.434-83.992-47.955-113.516-29.986-29.985-70.026-46.598-115.793-48.042-42.263-1.316-87.141 11.012-126.92 34.823-5.199-4.32-11.873-6.923-19.145-6.923-16.542 0-30 13.458-30 30 0 4.339.933 8.461 2.598 12.188-2.133 2.005-4.251 4.034-6.313 6.097-42.973 42.973-69.692 97.175-75.237 152.62-5.62 56.196 11.105 106.964 47.094 142.953 31.424 31.424 74.112 48.16 121.847 48.16 6.934 0 13.979-.354 21.106-1.066 55.445-5.545 109.647-32.265 152.62-75.237 35.535-35.536 59.806-78.305 70.454-124.011 14.574-2.036 25.83-14.576 25.83-29.703zm-30 10c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10c0 5.513-4.486 10-10 10zm-300-152c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm219.572 281.572c-81.45 81.45-201.355 94.075-267.288 28.144-31.666-31.668-46.346-76.707-41.335-126.821 5.086-50.865 29.761-100.751 69.479-140.469 1.936-1.937 3.924-3.841 5.928-5.723 4.096 2.102 8.732 3.296 13.644 3.296 16.542 0 30-13.458 30-30 0-2.024-.204-4.001-.588-5.914 36.521-21.868 77.537-33.206 116.023-31.996 40.59 1.281 75.958 15.871 102.281 42.194 25.751 25.751 40.245 60.08 42.082 99.505-11.535 4.185-19.798 15.251-19.798 28.212 0 10.897 5.842 20.455 14.557 25.709-9.811 41.374-32.728 81.606-64.985 113.863z"/>
          </g>
        </Svg>
      );

    case "loupe":
      return (
        <Svg
          width="20"
          height="20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512.005 512.005"
          xmlSpace="preserve"
          {...props}
        >
          <g>
            <g>
              <path
                d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
			S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
			c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
			 M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </Svg>
      );

    case "attachment":
      return (
        <Svg
          width="20"
          height="20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          {...props}
        >
          <g>
            <g>
              <path
                d="M446.661,37.298c-49.731-49.731-130.641-49.731-180.372,0L76.378,227.208c-5.861,5.861-5.861,15.356,0,21.217
			c5.861,5.861,15.356,5.861,21.217,0l189.91-189.91c36.865-36.836,101.073-36.836,137.938,0c38.023,38.023,38.023,99.901,0,137.924
			l-265.184,268.17c-22.682,22.682-62.2,22.682-84.881,0c-23.4-23.4-23.4-61.467,0-84.867l254.576-257.577
			c8.498-8.498,23.326-8.498,31.825,0c8.776,8.776,8.776,23.063,0,31.84L117.826,400.958c-5.06,5.06-5.06,16.156,0,21.217
			c5.861,5.861,15.356,5.861,21.217,0l243.952-246.954c20.485-20.485,20.485-53.789,0-74.273c-19.839-19.839-54.449-19.81-74.258,0
			L54.161,358.524c-34.826,34.826-34.826,92.474,0,127.301C71.173,502.837,93.781,512,117.825,512s46.654-9.163,63.651-26.174
			L446.66,217.655C496.391,167.924,496.391,87.028,446.661,37.298z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </Svg>
      );

    case "smile":
      return (
        <Svg
          width="20"
          height="20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          {...props}
        >
          <g>
            <g>
              <path
                d="M437.02,74.98C388.667,26.629,324.38,0,256,0S123.333,26.629,74.98,74.98C26.629,123.333,0,187.62,0,256
			s26.629,132.668,74.98,181.02C123.333,485.371,187.62,512,256,512s132.667-26.629,181.02-74.98
			C485.371,388.668,512,324.38,512,256S485.371,123.333,437.02,74.98z M256,472c-119.103,0-216-96.897-216-216S136.897,40,256,40
			s216,96.897,216,216S375.103,472,256,472z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M368.993,285.776c-0.072,0.214-7.298,21.626-25.02,42.393C321.419,354.599,292.628,368,258.4,368
			c-34.475,0-64.195-13.561-88.333-40.303c-18.92-20.962-27.272-42.54-27.33-42.691l-37.475,13.99
			c0.42,1.122,10.533,27.792,34.013,54.273C171.022,389.074,212.215,408,258.4,408c46.412,0,86.904-19.076,117.099-55.166
			c22.318-26.675,31.165-53.55,31.531-54.681L368.993,285.776z"
              />
            </g>
          </g>
          <g>
            <g>
              <circle cx="168" cy="180.12" r="32"/>
            </g>
          </g>
          <g>
            <g>
              <circle cx="344" cy="180.12" r="32"/>
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </Svg>
      );

    case "microphone":
      return (
        <Svg
          width="20"
          height="20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 250.189 250.189"
          xmlSpace="preserve"
          {...props}
        >
          <g>
            <path
              d="M214.408,119.658c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5c0,40.976-33.337,74.313-74.313,74.313
		c-40.976,0-74.313-33.338-74.313-74.313c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5c0,46.722,36.062,85.173,81.813,88.995
		v26.536H84.188c-4.142,0-7.5,3.357-7.5,7.5c0,4.143,3.358,7.5,7.5,7.5h81.813c4.142,0,7.5-3.357,7.5-7.5c0-4.143-3.358-7.5-7.5-7.5
		h-33.407v-26.536C178.345,204.831,214.408,166.38,214.408,119.658z"
            />
            <path
              d="M125.094,168.064c26.692,0,48.407-21.715,48.407-48.406V48.406C173.501,21.715,151.786,0,125.094,0
		C98.403,0,76.688,21.715,76.688,48.406v71.252C76.688,146.35,98.403,168.064,125.094,168.064z M91.688,48.406
		c0-18.42,14.986-33.406,33.406-33.406c18.421,0,33.407,14.986,33.407,33.406v71.252c0,18.42-14.986,33.406-33.407,33.406
		c-18.42,0-33.406-14.986-33.406-33.406V48.406z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </Svg>
      );

    case "telegram":
      return (
        <Svg
          width="20"
          height="20"
          viewBox="0 -39 512.00011 512"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="m504.09375 11.859375c-6.253906-7.648437-15.621094-11.859375-26.378906-11.859375-5.847656 0-12.042969 1.230469-18.410156 3.664062l-433.398438 165.441407c-23 8.777343-26.097656 21.949219-25.8984375 29.019531s4.0390625 20.046875 27.4999995 27.511719c.140626.042969.28125.085937.421876.125l89.898437 25.726562 48.617187 139.023438c6.628907 18.953125 21.507813 30.726562 38.835938 30.726562 10.925781 0 21.671875-4.578125 31.078125-13.234375l55.605469-51.199218 80.652344 64.941406c.007812.007812.019531.011718.027343.019531l.765625.617187c.070313.054688.144532.113282.214844.167969 8.964844 6.953125 18.75 10.625 28.308594 10.628907h.003906c18.675781 0 33.546875-13.824219 37.878906-35.214844l71.011719-350.640625c2.851563-14.074219.460937-26.667969-6.734375-35.464844zm-356.191406 234.742187 173.441406-88.605468-107.996094 114.753906c-1.769531 1.878906-3.023437 4.179688-3.640625 6.683594l-20.824219 84.351562zm68.132812 139.332032c-.71875.660156-1.441406 1.25-2.164062 1.792968l19.320312-78.25 35.144532 28.300782zm265.390625-344.566406-71.011719 350.644531c-.683593 3.355469-2.867187 11.164062-8.480468 11.164062-2.773438 0-6.257813-1.511719-9.824219-4.257812l-91.390625-73.585938c-.011719-.011719-.027344-.023437-.042969-.03125l-54.378906-43.789062 156.175781-165.949219c5-5.3125 5.453125-13.449219 1.074219-19.285156-4.382813-5.835938-12.324219-7.671875-18.820313-4.351563l-256.867187 131.226563-91.121094-26.070313 433.265625-165.390625c3.660156-1.398437 6.214844-1.691406 7.710938-1.691406.917968 0 2.550781.109375 3.15625.855469.796875.972656 1.8125 4.289062.554687 10.511719zm0 0"/>
        </Svg>
      );

    case "pause":
      return (
        <Svg
          width="25"
          height="25"
          viewBox="0 0 511.448 511.448"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="m436.508 74.94c-99.913-99.913-261.64-99.928-361.567 0-99.913 99.913-99.928 261.64 0 361.567 99.913 99.913 261.64 99.928 361.567 0 99.912-99.912 99.927-261.639 0-361.567zm-180.784 394.45c-117.816 0-213.667-95.851-213.667-213.667s95.851-213.666 213.667-213.666 213.666 95.851 213.666 213.667-95.85 213.666-213.666 213.666z"/>
          <path
            d="m298.39 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z"/>
          <path
            d="m213.057 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z"/>
        </Svg>
      );

    case "wave":
      return (
        <Svg
          width="40"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          {...props}
        >
          <g>
            <g>
              <path
                d="M229.322,189.02c-9.406,0-17.029,7.623-17.029,17.029v99.902c0,9.406,7.623,17.029,17.029,17.029
			s17.029-7.623,17.029-17.029v-99.902C246.35,196.643,238.727,189.02,229.322,189.02z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M176.532,136.231c-9.406,0-17.029,7.623-17.029,17.029v205.487c0,9.406,7.623,17.029,17.029,17.029
			s17.029-7.623,17.029-17.034V153.259C193.561,143.854,185.938,136.231,176.532,136.231z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M123.175,86.847c-9.406,0-17.029,7.623-17.029,17.029v304.248c0,9.406,7.623,17.029,17.029,17.029
			s17.029-7.623,17.029-17.029V103.876C140.204,94.47,132.581,86.847,123.175,86.847z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M70.386,136.231c-9.406,0-17.029,7.623-17.029,17.029v205.487c0,9.406,7.623,17.029,17.029,17.029
			s17.029-7.623,17.029-17.034V153.259C87.415,143.854,79.791,136.231,70.386,136.231z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M17.029,185.614C7.623,185.614,0,193.237,0,202.643v106.714c0,9.406,7.623,17.029,17.029,17.029
			s17.029-7.618,17.029-17.029V202.643C34.058,193.237,26.434,185.614,17.029,185.614z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M388.825,86.847c-9.406,0-17.029,7.623-17.029,17.029v304.248c0,9.406,7.623,17.029,17.029,17.029
			s17.029-7.623,17.029-17.029V103.876C405.854,94.47,398.23,86.847,388.825,86.847z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M335.468,136.231c-9.406,0-17.029,7.623-17.029,17.029v205.487c0,9.406,7.623,17.029,17.029,17.029
			c9.406,0,17.029-7.623,17.029-17.034V153.259C352.497,143.854,344.873,136.231,335.468,136.231z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M282.679,162.909c-9.406,0-17.029,7.623-17.029,17.029v152.124c0,9.406,7.623,17.029,17.029,17.029
			c9.406,0,17.029-7.618,17.029-17.029V179.938C299.707,170.532,292.084,162.909,282.679,162.909z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M441.614,136.231c-9.406,0-17.029,7.623-17.029,17.029v205.487c0,9.406,7.623,17.029,17.029,17.029
			s17.029-7.623,17.029-17.034V153.259C458.643,143.854,451.02,136.231,441.614,136.231z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M494.971,185.614c-9.406,0-17.029,7.623-17.029,17.029v106.714c0,9.406,7.623,17.029,17.029,17.029
			c9.406,0,17.029-7.618,17.029-17.029V202.643C512,193.237,504.377,185.614,494.971,185.614z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g/>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </Svg>
      );

    case "check":
      return (
        <Svg
          width="11"
          height="11"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 240.608 240.608"
          xmlSpace="preserve"
          {...props}
        >
          <path d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z"/>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </Svg>
      );

    case "double-check":
      return (
        <Svg
          width="15"
          height="15"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g>
            <path
              d="m473.074 120.729-203.295 203.296-21.212-21.212 153.765-153.764-38.926-38.926-153.765 153.765-61.047-61.047-38.926 38.926 61.047 61.047-21.211 21.211-110.578-110.577-38.926 38.926 149.503 149.503 60.138-60.137 60.137 60.137 242.222-242.221z"/>
          </g>
        </Svg>
      );

    case "picture":
      return (
        <Svg width="20" height="20"
             viewBox="0 0 512 512"
             xmlns="http://www.w3.org/2000/svg"
             {...props}>
          <g>
            <path
              d="m305.261 228.677c34.557 0 62.67-28.188 62.67-62.838s-28.113-62.838-62.67-62.838c-34.556 0-62.669 28.188-62.669 62.838s28.113 62.838 62.669 62.838zm0-95.676c18.015 0 32.67 14.731 32.67 32.838s-14.655 32.838-32.67 32.838c-18.014 0-32.669-14.731-32.669-32.838s14.655-32.838 32.669-32.838z"/>
            <path
              d="m497 43.001h-482c-8.284 0-15 6.716-15 15v395.998c0 .043.006.084.006.127 0 5.774 4.788 14.873 15 14.873 351.442-.167 448.77 0 481.993 0 8.284 0 15-6.716 15-15 0-11.141 0-386.102 0-395.998.001-8.284-6.715-15-14.999-15zm-15 30v239.44l-66.18-66.415c-5.86-5.881-15.39-5.88-21.25 0l-89.309 89.625-86.128-86.434c-5.86-5.881-15.39-5.88-21.25 0l-167.883 168.478v-344.694zm-430.86 365.98 157.368-157.925c.001.001 157.219 157.776 157.219 157.776zm430.86.018h-73.757l-81.807-82.097 78.759-79.037 76.805 77.077z"/>
          </g>
        </Svg>
      );

    case "cross":
      return (
        <Svg width="10"
             height="10"
             xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 22.88 22.88"
             xmlSpace="preserve"
             {...props}>
          <path d="M0.324,1.909c-0.429-0.429-0.429-1.143,0-1.587c0.444-0.429,1.143-0.429,1.587,0l9.523,9.539
	l9.539-9.539c0.429-0.429,1.143-0.429,1.571,0c0.444,0.444,0.444,1.159,0,1.587l-9.523,9.524l9.523,9.539
	c0.444,0.429,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-9.539-9.539l-9.523,9.539c-0.444,0.429-1.143,0.429-1.587,0
	c-0.429-0.444-0.429-1.159,0-1.587l9.523-9.539L0.324,1.909z"/>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
        </Svg>
      );

    default:
      return null;
  }
};

export const Icon: React.FC<Props> = (props) => getIcon(props);

interface SvgProps {
  gray?: boolean;
}

const Svg = styled.svg<SvgProps>`
  fill: ${({theme, gray}) =>
  gray ? theme.palette.text.secondary : theme.palette.text.primary};
`;
