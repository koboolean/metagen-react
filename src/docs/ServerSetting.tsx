import ScrollMain from "../comp/ScrollMain.tsx";
import Scroll from "../comp/Scroll.tsx";
import ScrollSub from "../comp/ScrollSub.tsx";
import Motion from "../comp/Motion.tsx";
import Title from "../comp/Title.tsx";
import CodeCopy from "../comp/CodeCopy.tsx";

const redis = `services:
  meta-gen-redis:
    image: redis:7.4
    container_name: redis
    restart: always
    ports:
      - 16379:6379
    networks:
      - meta-network
`

const postgres = `
  meta-gen-postgres:
    image: postgres:16.3
    restart: always
    environment:
      POSTGRES_PASSWORD: meta-gen
      POSTGRES_DB: meta-gen
      POSTGRES_USER: meta-gen
    ports:
      - 15439:5432
    volumes:
      - metagen-volume:/var/lib/postgresql/data
    container_name: meta-gen-postgres
    networks:
      - meta-network
      
volumes:
  metagen-volume:

`

const network = `networks:
  meta-network:
    driver: bridge`;

export default function ServerSetting() {

    const child = [
        {
            to: "common",
            title: "공통사항"
        },
        {
            to: "window",
            title: "Window"
        },
        {
            to: "mac",
            title: "Mac"
        },
        {
            to: "linux",
            title: "Linux"
        }
    ]

    return (
        <ScrollMain>
            <Scroll child={child}/>

            <ScrollSub>
                <Motion id={"common"}>
                    <Title title={"공통사항"}/>

                    <div className="text-gray-700 space-y-4">
                        <h3 className="text-xl font-semibold">Docker Desktop 설치</h3>
                        <p>
                            <span className="font-medium">MetaGen</span>은 컨테이너 기반 환경에서 실행되며, 로컬 개발을 위해{' '}
                            <span className="font-semibold text-blue-600">Docker Desktop</span> 설치가 필요합니다.
                            Mac 또는 Windows 사용자라면 아래 링크를 통해 Docker를 설치해주세요.
                        </p>

                        <div className="space-y-2">
                            <a
                                href="https://docs.docker.com/desktop/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline hover:text-blue-700"
                            >
                                🐳 공식 Docker Desktop 다운로드 페이지
                            </a>
                            <br/>
                            <br/>
                            <a
                                href="https://formulae.brew.sh/cask/docker#default"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline hover:text-blue-700"
                            >
                                🍺 Mac 사용자의 경우, Homebrew를 통한 설치도 가능합니다
                            </a>

                        </div>

                        <p className="text-sm text-gray-500">
                            * Linux 사용자의 경우 Docker Engine을 직접 설치해야 하며, 설치 가이드는 추후 별도 안내 예정입니다.
                        </p>
                    </div>

                    <hr className="mb-8 border-t border-gray-200 mt-5"/>

                    <div className="text-gray-700 space-y-6 mt-8">
                        <h3 className="text-xl font-semibold">이미지 태그 조합</h3>

                        <pre className="bg-gray-100 rounded-md p-4 font-mono text-sm leading-relaxed overflow-x-auto">
<code>{`# 사용 가능한 태그 형식
latest            -> PostgreSQL + HTTPS  (기본)
http-latest       -> PostgreSQL + HTTP
h2-latest         -> H2 + HTTPS
http-h2-latest    -> H2 + HTTP`}</code>
</pre>

                        <h3 className="text-xl font-semibold">데이터베이스 선택 기준</h3>

                        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-sm text-blue-800">
                            ✅ 기본 DB는 <strong>PostgreSQL</strong>입니다.<br/>
                            직접 설치하거나, <span className="font-mono">docker-compose</span>로 실행할 수 있습니다.<br/>
                            <strong>H2</strong>를 사용할 경우에는, 반드시 이미지 태그에 <span
                            className="font-mono">h2-latest</span> 또는 <span className="font-mono">http-h2-latest</span>를
                            직접 명시해야 합니다.
                        </div>

                        <div className="bg-yellow-50 border border-yellow-300 rounded-md p-4 text-sm text-yellow-800">
                            ⚠️ PostgreSQL 기본 포트는 <span className="font-mono">6432</span>이지만,<br/>
                            <strong>MetaGen에서는 <span className="font-mono text-blue-700">15439</span></strong> 포트를
                            사용합니다.
                        </div>

                        <div className="border border-gray-300 rounded-md p-4 text-sm text-gray-700">
                            💡 H2 데이터의 지속 저장을 위해 Docker 볼륨을 사용할 수 있습니다.<br/>
                            아래 명령어로 <span className="font-mono">metagen-volume</span>이라는 이름의 볼륨을 생성한 후,<br/>
                            컨테이너 실행 시 <span className="font-mono">-v metagen-volume:/data</span> 옵션을 사용하세요.
                            <br/><br/>
                            <CodeCopy text={`docker volume create metagen-h2-volume`}/>
                        </div>
                    </div>
                </Motion>

                <Motion id={"window"}>
                    <Title title={"Window"}/>

                    <div className="text-gray-700 space-y-4">
                        <h3 className="text-xl font-semibold">Docker Compose</h3>
                        <p>MetaGen은 <b>PostgreSQL 및 Redis가</b> 사용되며 PostgresSQL은 <b>15439</b> 포트를 사용합니다.
                            <br/>
                            <b>PostgreSQL을 사용하지 않을 경우 h2버전을 사용할 수 있습니다.</b>
                            <br/>
                            <br/>
                            아래의 코드를 복사 후 프로젝트를 관리할 디렉토리에 다음의 파일을 <b>docker-compose.yml</b>로 생성합니다.</p>

                        <h3 className="text-xl font-semibold">Postgres 미사용</h3>
                        <CodeCopy text={redis + network}/>

                        <h3 className="text-xl font-semibold">Postgres 사용</h3>
                        <CodeCopy text={redis + postgres + network}/>

                        <p>해당 코드를 docker-compose.yml파일로 생성 후 CMD(PowerShell)를 연 후 해당 폴더로 이동하여 아래의 코드를 수행합니다.</p>

                        <CodeCopy text={`docker compose up -d`}/>
                    </div>

                    <hr className="mb-8 border-t border-gray-200 mt-5"/>

                    <div className="text-gray-700 space-y-4">
                        <h3 className="text-xl font-semibold">PostgreSQL로 직접 실행하기 (Docker Run)</h3>

                        <p>
                            Docker Compose 없이 단일 컨테이너로 실행하려는 경우, PostgreSQL을 사용하는 태그(<span
                            className="font-mono">latest</span> 또는 <span className="font-mono">http-latest</span>)로도 실행할
                            수 있습니다.
                        </p>

                        <CodeCopy text={`docker run -d \\
  --name meta-gen-app \\
  --network metagen_meta-network \\
  -p 9940:9940 \\
  koboolean/metagen:http-latest`}/>

                        <p className="text-sm text-gray-600">
                            💡 PostgreSQL은 <span className="font-mono">docker-compose</span>나 별도 컨테이너로 이미 실행되어 있어야
                            합니다.<br/>
                            필요 시 <span className="font-mono">meta-gen-postgres</span> 컨테이너를 함께 실행하거나, 로컬에 설치된 DB를 사용할 수
                            있습니다.
                        </p>

                        <p className="text-sm text-gray-700">
                            외부에서 실행 중인 Redis나 PostgreSQL 서버가 있다면, 해당 접속 정보를 환경변수로 전달할 수 있습니다.
                            <br/>
                            각 설정은 <span className="font-mono">application.yml</span> 내의 <span className="font-mono">${'{...}'}</span> 형식 변수와 연결됩니다.
                        </p>

                        <h4 className="text-lg font-semibold mt-4">PostgreSQL만 외부에서 사용하는 경우</h4>

                        <CodeCopy text={`docker run -d \\
  --name meta-gen-app \\
  -p 9940:9940 \\
  -e DB_HOST=your-postgres-host \\
  -e DB_PORT=5432 \\
  -e DB_NAME=meta-gen \\
  -e DB_USERNAME=meta-gen \\
  -e DB_PASSWORD=meta-gen \\
  koboolean/metagen:http-latest`}/>

                        <h4 className="text-lg font-semibold mt-4">Redis만 외부에서 사용하는 경우</h4>

                        <CodeCopy text={`docker run -d \\
  --name meta-gen-app \\
  -p 9940:9940 \\
  -e REDIS_HOST=your-redis-host \\
  -e REDIS_PORT=6379 \\
  koboolean/metagen:http-latest`}/>

                        <h4 className="text-lg font-semibold mt-4">PostgreSQL + Redis 모두 외부에서 사용하는 경우</h4>

                        <CodeCopy text={`docker run -d \\
  --name meta-gen-app \\
  -p 9940:9940 \\
  -e DB_HOST=your-postgres-host \\
  -e DB_PORT=5432 \\
  -e DB_NAME=meta-gen \\
  -e DB_USERNAME=meta-gen \\
  -e DB_PASSWORD=meta-gen \\
  -e REDIS_HOST=your-redis-host \\
  -e REDIS_PORT=6379 \\
  koboolean/metagen:http-latest`}/>

                        <p className="text-sm text-gray-600">
                            💡 필요한 항목만 설정하면 됩니다. 예를 들어 Redis만 외부에 있고 DB는 Docker로 구성되어 있다면, <span className="font-mono">REDIS_HOST</span>만 설정하면 됩니다.
                        </p>

                        <hr className="mb-8 border-t border-gray-200 mt-5"/>

                        <h3 className="text-xl font-semibold">H2로 직접 실행하기 (Docker Run)</h3>

                        <p>
                            PostgreSQL을 사용하지 않고 H2를 사용할 경우, 별도의 Docker Compose 없이 단일 컨테이너 실행도 가능합니다.
                            이 경우 <span className="font-mono">volume</span>을 지정하여 <strong>데이터 유실을 방지</strong>해야 합니다.
                        </p>

                        <CodeCopy text={`docker run -d \\
  --name meta-gen-app \\
  --network metagen_meta-network \\
  -v metagen-volume:/data \\
  -p 9940:9940 \\
  koboolean/metagen:http-h2-latest`}/>

                        <p className="text-sm text-red-600">
                            ⚠️ H2는 컨테이너 내 임시 파일 기반으로 동작하므로,
                            <span className="font-mono">-v ./volume/h2:/data</span> 형식으로 볼륨을 반드시 설정하세요.
                        </p>
                    </div>

                </Motion>

                <Motion id={"mac"}>
                    <Title title={"Mac"}/>

                    <div className="text-gray-700 space-y-4">
                        <h3 className="text-xl font-semibold">Docker Compose</h3>
                        <p>MetaGen은 <b>PostgreSQL 및 Redis가</b> 사용되며 PostgresSQL은 <b>15439</b> 포트를 사용합니다.
                            <br/>
                            <b>PostgreSQL을 사용하지 않을 경우 h2버전을 사용할 수 있습니다.</b>
                            <br/>
                            <br/>
                            아래의 코드를 복사 후 프로젝트를 관리할 디렉토리에 다음의 파일을 <b>docker-compose.yml</b>로 생성합니다.</p>

                        <h3 className="text-xl font-semibold">Postgres 미사용</h3>
                        <CodeCopy text={redis + network}/>

                        <h3 className="text-xl font-semibold">Postgres 사용</h3>
                        <CodeCopy text={redis + postgres + network}/>

                        <p>해당 코드를 docker-compose.yml파일로 생성 후 터미널(iTerm)을 실행한 후 해당 디렉토리로 이동하여, 아래의 코드를 수행합니다.</p>

                        <CodeCopy text={`docker compose up -d`}/>

                    </div>

                    <hr className="mb-8 border-t border-gray-200 mt-5"/>

                    <div className="text-gray-700 space-y-4">
                        <h3 className="text-xl font-semibold">PostgreSQL로 직접 실행하기 (Docker Run)</h3>

                        <p>
                            Docker Compose 없이 단일 컨테이너로 실행하려는 경우, PostgreSQL을 사용하는 태그(<span
                            className="font-mono">latest</span> 또는 <span className="font-mono">http-latest</span>)로도 실행할
                            수 있습니다.
                        </p>

                        <CodeCopy text={`docker run -d \\
  --name meta-gen-app \\
  --network metagen_meta-network \\
  -p 9940:9940 \\
  koboolean/metagen:http-latest`}/>

                        <p className="text-sm text-gray-600">
                            💡 PostgreSQL은 <span className="font-mono">docker-compose</span>나 별도 컨테이너로 이미 실행되어 있어야
                            합니다.<br/>
                            필요 시 <span className="font-mono">meta-gen-postgres</span> 컨테이너를 함께 실행하거나, 로컬에 설치된 DB를 사용할 수
                            있습니다.
                        </p>

                        <p className="text-sm text-gray-700">
                            외부에서 실행 중인 Redis나 PostgreSQL 서버가 있다면, 해당 접속 정보를 환경변수로 전달할 수 있습니다.
                            <br/>
                            각 설정은 <span className="font-mono">application.yml</span> 내의 <span className="font-mono">${'{...}'}</span> 형식 변수와 연결됩니다.
                        </p>

                        <h4 className="text-lg font-semibold mt-4">PostgreSQL만 외부에서 사용하는 경우</h4>

                        <CodeCopy text={`docker run -d \\
  --name meta-gen-app \\
  -p 9940:9940 \\
  -e DB_HOST=your-postgres-host \\
  -e DB_PORT=5432 \\
  -e DB_NAME=meta-gen \\
  -e DB_USERNAME=meta-gen \\
  -e DB_PASSWORD=meta-gen \\
  koboolean/metagen:http-latest`}/>

                        <h4 className="text-lg font-semibold mt-4">Redis만 외부에서 사용하는 경우</h4>

                        <CodeCopy text={`docker run -d \\
  --name meta-gen-app \\
  -p 9940:9940 \\
  -e REDIS_HOST=your-redis-host \\
  -e REDIS_PORT=6379 \\
  koboolean/metagen:http-latest`}/>

                        <h4 className="text-lg font-semibold mt-4">PostgreSQL + Redis 모두 외부에서 사용하는 경우</h4>

                        <CodeCopy text={`docker run -d \\
  --name meta-gen-app \\
  -p 9940:9940 \\
  -e DB_HOST=your-postgres-host \\
  -e DB_PORT=5432 \\
  -e DB_NAME=meta-gen \\
  -e DB_USERNAME=meta-gen \\
  -e DB_PASSWORD=meta-gen \\
  -e REDIS_HOST=your-redis-host \\
  -e REDIS_PORT=6379 \\
  koboolean/metagen:http-latest`}/>

                        <p className="text-sm text-gray-600">
                            💡 필요한 항목만 설정하면 됩니다. 예를 들어 Redis만 외부에 있고 DB는 Docker로 구성되어 있다면, <span className="font-mono">REDIS_HOST</span>만 설정하면 됩니다.
                        </p>

                        <hr className="mb-8 border-t border-gray-200 mt-5"/>

                        <h3 className="text-xl font-semibold">H2로 직접 실행하기 (Docker Run)</h3>

                        <p>
                            PostgreSQL을 사용하지 않고 H2를 사용할 경우, 별도의 Docker Compose 없이 단일 컨테이너 실행도 가능합니다.
                            이 경우 <span className="font-mono">volume</span>을 지정하여 <strong>데이터 유실을 방지</strong>해야 합니다.
                        </p>

                        <CodeCopy text={`docker run -d \\
  --name meta-gen-app \\
  --network metagen_meta-network \\
  -v metagen-volume:/data \\
  -p 9940:9940 \\
  koboolean/metagen:http-h2-latest`}/>

                        <p className="text-sm text-red-600">
                            ⚠️ H2는 컨테이너 내 임시 파일 기반으로 동작하므로,
                            <span className="font-mono">-v ./volume/h2:/data</span> 형식으로 볼륨을 반드시 설정하세요.
                        </p>
                    </div>
                </Motion>

                <Motion id={"linux"}>
                    <Title title={"Linux"}/>

                    <div className="text-gray-700 space-y-4">
                        <h3 className="text-xl font-semibold">Docker Compose</h3>
                        <p>
                            MetaGen은 <b>PostgreSQL 및 Redis</b>를 사용하며, PostgreSQL은 <b>15439</b> 포트를 사용합니다.
                            <br/>
                            <b>PostgreSQL을 사용하지 않을 경우 H2 버전을 사용할 수 있습니다.</b>
                            <br/><br/>
                            아래 코드를 복사하여 프로젝트를 관리할 디렉토리에 <b>docker-compose.yml</b> 파일로 생성하세요.
                        </p>

                        <h3 className="text-xl font-semibold">Postgres 미사용</h3>
                        <CodeCopy text={redis + network}/>

                        <h3 className="text-xl font-semibold">Postgres 사용</h3>
                        <CodeCopy text={redis + postgres + network}/>

                        <p>
                            해당 코드를 <span className="font-mono">docker-compose.yml</span>로 저장한 후,
                            터미널에서 해당 폴더로 이동하여 아래 명령어로 실행합니다.
                        </p>

                        <CodeCopy text={`docker compose up -d`}/>
                    </div>

                    <hr className="mb-8 border-t border-gray-200 mt-5"/>

                    <div className="text-gray-700 space-y-4">
                        <h3 className="text-xl font-semibold">PostgreSQL로 직접 실행하기 (Docker Run)</h3>

                        <p>
                            Docker Compose 없이 단일 컨테이너로 실행하려는 경우, PostgreSQL을 사용하는 태그
                            (<span className="font-mono">latest</span> 또는 <span className="font-mono">http-latest</span>)로 실행할 수 있습니다.
                        </p>

                        <CodeCopy text={`docker run -d \\
  --name meta-gen-app \\
  --network metagen_meta-network \\
  -p 9940:9940 \\
  koboolean/metagen:http-latest`}/>

                        <p className="text-sm text-gray-600">
                            💡 PostgreSQL은 <span className="font-mono">docker-compose</span>나 별도 컨테이너로 이미 실행되어 있어야 합니다.
                            <br/>
                            필요 시 <span className="font-mono">meta-gen-postgres</span> 컨테이너를 함께 실행하거나, 로컬에 설치된 DB를 사용할 수 있습니다.
                        </p>

                        <p className="text-sm text-gray-700">
                            외부에서 실행 중인 Redis나 PostgreSQL 서버가 있다면, 해당 접속 정보를 환경변수로 전달할 수 있습니다.
                            <br/>
                            각 설정은 <span className="font-mono">application.yml</span> 내의 <span className="font-mono">${'{...}'}</span> 형식 변수와 연결됩니다.
                        </p>

                        <h4 className="text-lg font-semibold mt-4">PostgreSQL만 외부에서 사용하는 경우</h4>

                        <CodeCopy text={`docker run -d \\
  --name meta-gen-app \\
  -p 9940:9940 \\
  -e DB_HOST=your-postgres-host \\
  -e DB_PORT=5432 \\
  -e DB_NAME=meta-gen \\
  -e DB_USERNAME=meta-gen \\
  -e DB_PASSWORD=meta-gen \\
  koboolean/metagen:http-latest`}/>

                        <h4 className="text-lg font-semibold mt-4">Redis만 외부에서 사용하는 경우</h4>

                        <CodeCopy text={`docker run -d \\
  --name meta-gen-app \\
  -p 9940:9940 \\
  -e REDIS_HOST=your-redis-host \\
  -e REDIS_PORT=6379 \\
  koboolean/metagen:http-latest`}/>

                        <h4 className="text-lg font-semibold mt-4">PostgreSQL + Redis 모두 외부에서 사용하는 경우</h4>

                        <CodeCopy text={`docker run -d \\
  --name meta-gen-app \\
  -p 9940:9940 \\
  -e DB_HOST=your-postgres-host \\
  -e DB_PORT=5432 \\
  -e DB_NAME=meta-gen \\
  -e DB_USERNAME=meta-gen \\
  -e DB_PASSWORD=meta-gen \\
  -e REDIS_HOST=your-redis-host \\
  -e REDIS_PORT=6379 \\
  koboolean/metagen:http-latest`}/>

                        <p className="text-sm text-gray-600">
                            💡 필요한 항목만 설정하면 됩니다. 예를 들어 Redis만 외부에 있고 DB는 Docker로 구성되어 있다면, <span className="font-mono">REDIS_HOST</span>만 설정하면 됩니다.
                        </p>

                        <hr className="mb-8 border-t border-gray-200 mt-5"/>

                        <h3 className="text-xl font-semibold">H2로 직접 실행하기 (Docker Run)</h3>

                        <p>
                            PostgreSQL을 사용하지 않고 H2를 사용할 경우, 단일 컨테이너로도 실행할 수 있습니다.
                            이 경우 <span className="font-mono">volume</span>을 지정하여 <strong>데이터 유실을 방지</strong>해야 합니다.
                        </p>

                        <CodeCopy text={`docker run -d \\
  --name meta-gen-app \\
  --network metagen_meta-network \\
  -v metagen-volume:/data \\
  -p 9940:9940 \\
  koboolean/metagen:http-h2-latest`}/>

                        <p className="text-sm text-red-600">
                            ⚠️ H2는 컨테이너 내 임시 파일 기반으로 동작하므로,
                            <span className="font-mono">-v ./volume/h2:/data</span> 형식으로 볼륨을 반드시 설정하세요.
                        </p>
                    </div>
                </Motion>

            </ScrollSub>
        </ScrollMain>
    )
}
