import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import DoctorCard from "../components/DoctorCard";
import Footer from "../components/Footer";
import { Search, Calendar, Star, Filter } from "lucide-react";
import "../styles/Home.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    specialization: "Gynecologist",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExIWFRUXFxUVFxYXFxcVGBUXGhUWFxcXFxUYHSggGBolGxUXIjEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi0lHyUtKy0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQ8AugMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAgMEBgcBAAj/xABBEAABAwIDBQUFBQcEAQUAAAABAAIRAwQSITEFBkFRYRMicYGRBzKhscEUI0Lh8DNSYoKS0fEkQ3KishUWU6PC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAKREAAgICAQMEAgEFAAAAAAAAAAECEQMhMRIyQQQTIlEzYXEjQkSB8P/aAAwDAQACEQMRAD8As28V26mRHFpKa3brmoS46lp+YXd7We6f4SmdztP5Xf8AkFGXaiq7jlTaDBIw5gkfFP0LlkS4tEukd0BuGHDIjXUSDmgN17zv+TvmUa2LaF9EOEZF7TIk5hsNH8RkwUueKpMWL2TrHZbaoLn0xEmDhwYhlnh4cVNp7OpUvdaGk9PqrKy1DWgaZAZqLc2oPH0j5Fee3LyUVAN7JzB05JF3WaAC7jw6o5StMkH3hsCWZK3p8jTcV5BJLkTtC5pPpvY7SB8OIQjeGBavgyJZB5iRCFXLqgAY92Wh8PGFP22IsyB/APitOCE4KSf0LJptDfs+9yoerfqjr3f6qn+uCC+z5n3b/EfVGCP9W39cFX/H/wC+wS/IEarPvan8p+CSWJ+7EVnf8Wn5pC1+m/GiM+RotTcJ9yQriHWBOtCQ1LBXCsdCWE0HFdFQphaHQupsVOi92nREFCyvJHaBd7QLgUV/eNuJngEP3OOXk75hFttBoZEiSNEK3XYWmDyd8wvJl2o9FdwGu/ff/wAnfMq1+zwB4qMMZOY8c+IP66oXX3fquLnAtzJOvMyim51q+1qufVgMLYyzzkEZeqM0pRoSmmX8pmowngmWbXon8fwP9ksX9M/7jUmSEZHK0M1LcHVvwn6KHtegOwdA0z0jjyRL7Ww6PZ/UExe1m4CS5sccweKyxh0zTX2Ndoze8tC85Og8Mjz4ngnt4MrU+LPmrE6tT4Vm+rTxnigG+91Sbb4e0biJbkIk58gvWmvi9iKrQncH9m/xH1RZgm7HgfoqZunvNQt2Oa92ZI080Ysd5aD7pru0AaQczlyWdr+hQX32XLaLYq+LB8ymE7f3DHOa5rg4FuoM8uSZDgtXpvxolPk85NuKccUgq5M6xOgJNMJ4BcBngEoMXQlhNQGcwLhppxeXCjJprnZp4pK4FmcWrqr8RLYw5ZnMo3u5TcTJadDqDzCMbKpNDnQBkYmEeY9ebHAulG95Nmb3NzcMe+DUAxOjIxEpLdr19C8+YC04PXiQdQD5JvZB7jM2pbYqD8Q8wnGbxPnRp9QtBfaUna0mHxa3+yjv2LanWhT/AKY+SHtHe4UV22zqWhC9p71spCcEnrEFXPei3sbSg6tUpAAZADFm45NGvNfPG1NpPqvLjoSSBwA4BD2l5D7gZ2tvZVqE4cLQf3QJCCVb17z3nEnqZURxTjafHw+qdC2TqL+munj+ipZxASD48fgodQw8EDQA+MqdYXgiDyz4D/KYA/Y7frUHAtc5p+B/l4rRd199mXDhTeMDzoZEOPTr0VAuNnGrTBDQ0+91I4IEyq9jhmWlpmRqCDwTJuIGrPo1rl2FUfZ/vILmlgqOmq3IzEuHAq4QtEXaJNULpp5oTVMJ5oTCiwEoBcCUERT0L0Lq8uAchchdXFwANsl0F3ifmi4qqv2T4J8T81NddQsqNQU7ZJddRxQG42mBxQW72/HFE4u328c1x20mgSTpmVm79vvOiBb0bwVBSLJjGI14cf11Qs4b9qm9n2qoKDD93TMnk50R8J+az4v4LlSpJXGDNTbsY80QVOtjmJ0+SnbN2NjGJw8kdt9hA8FJ5UikcTYKbYEiBny8EKubWownIgrTth7GwHMI0dhUqhhzVN59lVg0Zpu5tE97GZIbABMfFStt21NzQcmmBijQdZ+iv937O6Rbjpd08oHzWd7fpVKLnU3MzGhjJaITUkRlBxB+720fst1TqTkHAnhImCPSVvttdMe0OY8OadCDkQvnihYzBcYznP8AXFX/ANn+0KoqiiXFzHAwI93Uz0/NWxyrRKSNSYnAm6GgTwWgickpQcUqEoNRAIxle7QpeFeLVwBvtei92vRKwLnZogKq2pBPifmo9zdwuXLoLvEoVdvWNGkj394ShFR+akXBUMHNccONVW3uq99gnIA/RWjgqZvO4mpmIEfXVB8HIClS9nN7w8VDCsO7djidiOgUpOlZSKtlt2cwBoRq2aEKoNRe3EDNYls2rQUtCjFFuhCA29cSjFvdAGSQANeCHkcs1qThzVO313bNRrqtMAmO8Dy6IwzfKzZ3TVBOkNzTjd5Ld/FzQdCWkNPmtNNbM9xejArqo6k4scdPwyfVWX2b3oF0Gl0YwQOrtRn5If7TtmmjdSB3HjE3l1Hqmdy7UC7oOJc4B2MtykQCdCdJhaMc7pmacabRvdEp8FD7K7a8d2fMEH46qexbUZmOBKC40JQCIp5eK9C9CADi4u4V6AiApN+Ic4dSgt0Uc2i6XuPVAbxY1wagXcFRqaeuEyCicOTAVX3qbIY7LUiPEfkjlzWIEDjkq/tx0tgxlnzkoMKK+QrXsMltEYRLjMcpniqu5hhXLYdP7hvgs2Z6L4lsZuGNbJqVXlx/dIAH9gh9O/LXd2tUH80hEBZtFUuqtL2kEADLCeccUNqbPaMUNxE5DhHWBojFquQyTvSLbsO4e7WpPwKP717Lw24rPqODY90ZT5qq7As3MaJnJanU2W2+sBScdWwOh4fFZr+RdL48GLW9+yk4EUzBOTsh54nAz46LQtl7drNqNt6tOp2b2yA9rTrxD2d1w+KDf+17ik9tOpRLgzJrhDhE8JOnQrTNh2BPfeJdAHeiYHQZBVbT1QIxa8lG9q+zsVrTqDVjwPJwVG3duxRqtqceJE5Z6dVsm/tljtnNA0LXZZwAcz6LHN5qH2e6FJoycxlQGcocNI4Zgp8E0viSzQ/uNr2Xch7Q7nmOXqjTQs43D2qXN7Nx5R+vh5rQ6RkBelF2jDNUSGpQTQXZKcSh1eKbkrmIrqFocK4m8RXMZXUdRTb0ZlAr06o9fsIdnrA0VfvVju9o01QJuCmSck5cKM85FccM13cT+gq7tbTqUdrv4qv7Yqd6EGMiXsMtdRe0iXMgjKcif8qy2AGeH3ZMfP6qm7tXJbcsbIAf3DOmeh9fmr0ymGuMNjM6aE8VjyppmrE7RI+xhyQ7ZwBkqVSqxmmalXE7oopsvQ5THIZc1oW6N00U8EiRELOqzSYhzgOQMT4qwbvWdUnA+Q0jOCQY8RoilsNKizbU2wKdXs6oGEiWvGh6eKMWD6ZbLTqgu3Nm0jbdmAGtYJbH4Y4yg26+0nYcMyASPRGUnFgSTRaL+njBaOIPpx/ssR9qrm/bw1rQAylSZ4ZvP/6Wqb2bVdQose0EufUYwAcjJd8GlYffVX3FSpWfm579Bwy08Boq+njfyI55a6SyblXIbWbjJgZE5CJhbhaUJaMDg7IZaH0WDbNbgIw+HmdT8IWlbrbaLmAT3m5a8jp4clujOnRklG1ZcohKAUig8V2Yh7w+KjSrxl1GeSo7C9C9K9KYQ5hScISpXpXAKftkd4Hm0j0I/uqvelXHbTJptPJ5Hq38lTL92aw4uxGyfcwTclQnuUm5ch1epCcUjXVbCCeCq9xVkkovtmt3QBxQR4SsYXZWzqtRlNvvPc1o8zqrdUualDaLqFR5LJLWychOYPqI81VLG6dRqMqs95jg4eIT+3dsPu67q7wGuMZN4RxnnOaSSTVDRlTs0rCoji8E4I81G3e2iatFpfrmJ5wYRMBYqp0bk7Vgm6r19f8Ax/UorsK6uHED7RhPOS4x4kiE6yxa8945K2bv7LtWQQxpPM5n1KJWM68Cjsd9ai5tS4qukZd6APSJUXd607GWHgVYdrbUp0WTIAVA3i3jfSourtZlo3FliJymOSElekJ1eWSd/d4Kba1C3LgMIdVdJ0/C0eJGP1We0niQG6FxI8CcvgUBqXL61R1So4uc4y48zMekZI03ukH9frRbccelUYZy6nYc2LSNSrhmMsusf5KNUrg0KgqZwO68cMMxPkfohuw24KwM5ED1/wAhWHbNuB34kZhw6EAuj1Kq42rFunRft1NoTGcggQeYKOXlOHHkc1mfs/uS3FTJ9xxA8DBH1PmtRue9Ta5PB7TJZIkReheXlczHIS8CSngg2cZTdb3YqZpmkDJBBkyCqxd7WB4H5rj6Z5H08lHqW7j+E+h/X+VlSSVI1vZFrX/Q+iHXd9AzBU+8pFgLnNIA5iOR+vx9K1cVi90+nQLmzhV3WxqK9KqSmnlKE9CdtLR1RwYwSc/IDUlMgE5Baluju6KFm+q5p7V9NxM6tEGG9EYxs4B7qs+5A1zd8yj9JsKvboO+6A6mVZ6YXnT72ehj7UL7UcQu0r14MMlecxENl0Mxkk6mUOU9k1arg+qZHJVH2nXYhtIcx8FqF3VhngFim+9fHXVcO5kczqDAFt4/mrBSzb1yAQW2p5meiNU9GumBoePH81vRiDDbjutMxkDpxiforDY7YFYQeRkDnETHIj5KnPugG4DkdR/lQbPaTqL8TTpw4eiN0dyaduizs5xd0udAnLQQMz4LULS6a6hEieSwSjvrhYW4CcUzyzM6frgiO4e1rh9w5gxvaWkhuZhx91xMZASSjGXCOkrs2OF4hct3GBOsD14p2VssyDUJcJaVCDYLMjk80lh1J/X6/UrpePHwz+C7b7sV7t01Zo0B+H/cf4j8I8c+iwqLfBsuiob2bUbVijTOLvZgZz0Ea5/o6prZG613XzazsWHVzxhy6NPeK2XZG7NCg0CnSa3rEuPi45lT3bMBBAVlj+xeoyS03EoF2F1V738xDWz4a/FP3u6FtRY93Zzha50kk6AnirqdjGnVAGpM+XNRN4Wf6atInuPA9Cm6EgGa+z/YguKpLvwd6OZkALaaWyi9hZzEHzWe+yCiO0qnjEfGVtGzqQiUI6iHyfPm7tuadStSOrKj2/0uLforKKaNbzboPo3NS5aMVOq8uMasLtQ7pOhUOlYvJ7oJXk5lU2ejiacSK0Hki+za0cFIGxnBodCQ2iW8FL9lBveG8DaZJWObZJe8uPErTt8qbsAbw4qgbQoiFbE6dkcitUCqERmilu77vI6Hw6IeKcKVa0XYSQCQTGXOPzW2MrMjjQ7Uqgwf11CG3FKX5QAeJOiRUqHQ+a5SYXED6wi2BBiws2Fs5uI8h6HVWjcPeF1pcyWtLHEB2UkDmCAg1vTb2Md3LgC6fNDNpXbx3QQwfwkzpxOsoXsbp0bZfb329PERVaGjFnMyBPutOpyVe2b7QSw/ejtAW4pGbgZyHI6x5LKKzalSJe53ElzvjJVz9nmxTeF7SS1rRBfEzno1WWSTeiXRFXZfNwt8H3tWvTe2A2HMy0bpBjjKvGE8kG3d3doWbS2kDLjLnEy53ny6I9KsrS2ZpNXoqWx9l06QAAl37x1/JHfs4azxKgMCnCtLQOIQWi5MFv3V5lPuHonLO4BOE6qQ+jk4cwfklcggi9shUaHiQ5uhGsKvbQt8THNcJlrmyOoOoVt2RUkZ8oVd2w/sKxafdIkeH5Jk90cZp7Lr1tGpUY5riSW+6JjURHUwt2t6BDW5QSBIOvgVjHskumjarmxlUbWDZ1aWvxDziVutQaKLlWgjGAPBa4dCCq5XsxTeWxofgrHUMOUHbVCS13SFmzwtWXwyp0Q2jJDrqykyp9IJeFZHE02C7nZLKrIe2VStt7hNJJYSOi0qFFvHAAkplGjmzCb3d17HhgBLnENaOZJgD1V52p7PPs9o3DUmoO+/h3oE4TyCs+6+wzWuDd1GwxhIpA8XcXxyHBHN7cIoPk8MvHgt3p4/Zlyy3SPl7a5iu+RGeY6xn8UwTwU7bbA6pUcP3jHWInNQwzkZ/ujJbJokWry2CWyNfpqkwcUgRB8lKpxLAD72s8MxPwlHLvZ7SBBAaGgk8MyfoJStDIl7r7qvvnNYIDi0uM5AAE6wMtWjzK2Hd/d2nY0wxozOrogHw6ID7I6mKnVY1gDmuZ3wdWOnIjmIOXVacKQiCJCpCShsTIurQEDwnu1CXeWGHvN04jkocLSmpK0ZXGuSBTZMt4kSPEL1F8/Vepvggjgu333dQP8AwVBPg7ilNB1laH+Ks1KoHMnp9FU7tsd4acUcZVi3cehQyRugkPZD4/qIQT2h03N7Op+HNvrn9EWssmjxlTdr2IuqBpnXIg+C6WnYD512LtR1reUriCOzrS7/AInJ2XgSvqOjVD2te0yCAQehEr5r2jsntb59tS1fk2eeE8fJbV7NbiqLUW9x+1pEtPCWz3fhl5KU4urCWOt7y9ftJpOgSQJA5kcFyqO8n2OSyVoK0AaL2uqdnIDiMTQTq3gfHXLonoHadkTDoLo6AgfUIXtsvo3M0H0qZLQ+pjLgXCSBqIIALsuaVtS6wX9B3B9Gp0ByxcdPd4rOoLSfPkqsjdkg31PHVpgEupMc45gAkRkD+tEMbcVbtrGUGmiceGo9wkinHecyRMiRB5lO2N2S8VbgUmuIcaeGoMRDvwlrcnCOKsew6EMx4Q0uzAAjC3gAPj5qkEqclx4JuUnyx24q07ekXOIaxjZJPABYDvrvlc39Q06IdTo6gDJzhwc93CeAHxWh+2i/c2hToAwKjpd4Ymtj4lI2TsdhtDUDBNYudMCcAJZTb4BjWrRCNimRW27tQjFi6QBkou2dgvogOdocpHCeYWm0rUt7pEQhW+OH7LUmDAEHqXAADnmncFQdGZ0aJLg2DlE+Ugq5WrXsY1rQ0ufzzjQA9PBV37E5lQB+pDHZE6OaHNBjjBGS03cPYBuLhrqg+7p54eDjwnos/S2UWtl+9nmzTRtaYcIccTzlE4nZE+QCtaaotzMcICdKDEZxDH2zZPe4og90CYQN0kzOuariTd0yU2vIKaIKmvt+2oup/ib3meI4eajET4p+yrYXAqrGBlld4hgdqPijVy7/AE8cz9UF3ktuyqio33X94dHfiH180U7XFbtPgUeUmFnGaAIhbV+448gVBthJA6JttSBUHNpQasBlNvVw7VqPGrWscPOpTHycVttanpWYO8Bn/E3iCsSb3Np1Z/8AhYf/ALaK3OzPcaOgU39hHqb21Ghw/XRKDUOL+wfP+28/0u/sibnckjVfwcDtuW5fScGspufzeBkJzMkcNUPdQpOfb16kNNNlRgAcCwTAOfGBPqjuRkHQiPJQvsrAwNLGtwOhsAQOsdWpa+RxVKooOvqdCjbyHND+2GbWiDLQeXhxcr/TECFVt39gspXVas0NAwhjQ3FAzxOyJgfh05K0NK53wwmae26zcaVGoNAXNPjk4fIhTvZxeits5gOtMvpnoAZb8HBWjezY4u7Z9EnCcnNMTDm5jLiqx7P93TaNq0jULpFJzhlhBhwJblOuWfBoVYPSANbQsS55cBDNOrvyVS38thhtrfIdtVbPCGN1PqR6LUbpgcQOCYutlUa9RrKlJrw1hmRJ7xGQOo90qk3o5Ajd/dGk+ky4e0S4mq0EaNP7MHwZhHkrRsOxbTDnARiPwUynTAZgGgyA5DgF2ucLY8lHqbVBF2/E88085QqVwApgKSSaZxzihT7N0mNJKLALy6M3HgVxsqDXJWFSr7Z8d5uihU6vArUnZxIuKPbUXUj7w7zD1H6jzUDY1XFQLDq0kfFTQ+Mwg1W6FGrJybUdB5B3A/RGghuyOYUa4yLvNOUXwVHr1O+4IAMv2lUA2nWzAiiwZnU9rRMDrGa2fZNzNNvgFie3rKqNo1H4HYHuYwOzj/bPDh3TrlkeS1CwuSGN8AkSuzi2VKYqMLTxUHZ9w6mexqfyu+iZtNocCptZragg+vJdVafASU459UP3hdFu8yWmWd4a+9l812jXObHe83/sOBTl7R7WhUbGZaY8RmPiErVHHdgUsNBskkmXEnUyZRFNW7MDGt5ABKc/OOk/kpvbCOtKB1AKd3yDxB/m0/7N/wCyOMQXeakcLajdQYnlxafULo80cSbym1vBc2SzFjqfvOgeDe6PlPmhm29tUx2bQ4Co9mMM4xpPkSE9u/tim5zrdo/ZiJ/eIMP9CjOapK9jxxTkm0tJX/oMtbDoTO0CMh5qVOaHXtT7zwAH1TY9yEQwWohbvwtAJnl4KGyniKltol3QcP8ACpkaemFkmnXByTiZZRDcyk/ahyKztXwAF7NvJ7juOi9tLZwObcimLG1zDnZAZou6qFd6ehSsU6sHCdUC3yZ90HcnNPxj6qybZtwDjb5oFt1vaWzxxifTP6KqCiXsuqXUmk6x8OCr2+W8n2UtbTaH1n5NbwHUqy2NPCxo6BU/adG2F32l4Hdm4Pptc3RtTET3jwkR6JJ8A8ge12hfnvup07luIYqYxNOQOTXDjBKt9rtRuCnVbJpVANSC6meTiPeHVAbvbLbJruzqDA9shvdJaSCDDhmZEIXurtKaJpfjc5xI5BzhhA5Zypp0wmmUX8QjeynYslWNmyGAFF7K4wOBVmtAHdqVHMIdxafUclNZfAtbh/GQPCMz8o81Iv7dtan5Kt7EY7tHDWPqfySqpIYuLXTmkVzmDwUe9vadGk59Rwa1rS4nwE+qqu6+/NG9LmgdmQcIa5wLjxBI4T5+Kils4uQqlroOhUfbDwaL+OUefBKvcL6Lw5xYMDu+NWZHvDqNVktbaX2K3rso9jVqNoNey6pYiKvfAiuw6VJjimjG3f0AN7cpRUE5ubLA7iGkhxb4SF662Z2NNlWnW/aAh0GDrw4kc+qd3e2m8VA+phcYAcwSYBhp1EAF2Yzkwjz9s2tcBlWi4OBrjDhxFgouh57uYBOkLPn9O5u0ej6X13spRrV7/a+hs7Zp7O2cbio4VCMwA733uMNYCfjygoduPvaNp9ocAZUZDngEloBLgIJA/dKDb07qHaNWm23qNpW1MkEOJl7iRjfTb+IwQ2SrhsfZtCyaLe3phoyLncXmIlx4q2GEkqRkyz68jkvLCr6uFroyAHqVDtqpOfxTW3LnCGUx71Qz5D8z8E/QygLTFLpsXwGqeYzTuEKJQqjmn+0WSSdiFdumvDeKD1dqFvNWzFI0JUG8sWuBPZtJ6rUpAK3/AOtB/dJ9VGuK4wEcCom3rNrXxh7Pk4GRPUTkgtW9cGmk7J5EA854hU6RqLy10FR9o2barHUniadT3gAJB4OE6wvUKksY7mBPjxUljpCm1Yhmm1twix33Tu0B4luEjPxRrc/dbsT2lTN3Dp+auASkFBHWcAC8vJJTnEqhfOaI4KZu9QPfdGcoQrTsVkUWxqZPxKnkfTEYDb37HfWpmCCA04m/NZS/ckh7KlCoabmkEnUDMTHPwK3zDM5ajn9EJZbMM5AaSPVJCVqmcAXbcqMtalNwIqdm4UqzJLXOww0u4sdPPLqh9e8fWFdjsL24g4FrTgDRTbmZEzjk558lY7/d9j2ODHupFwjEw6HnCh7E3er0KgcLkvbnIcNdSCY1zKDl0vSKRhGStyoQ9lqD2NSk9hZQa8va7CXhrZILQe84SdePqmRs6jBqU67mudAmqImaoZ2b4h0l+XxRG8q3RBbUtG1A4GmXNIBwkZ8zGvnC5Qq0Yax1J9CC055gQ/tATOsungprKv2M8EkrVP8AhpkKw2PUoVKb6uBxZ2sFpyDn1CSADmAGNphHnXLC4OAOI+Eeqz7eS9FncU306oqtfUq1agAj3sLSDGRIjLwVjddAsD2GcQGA+IyPlqtkIKSsnVaEUKprXNWsfdaeyp/y5OI85+KI/ac4HBCras2mxxHuUm5dXRn+uqVsB1Spn2bgOZEA+BOqs4pLYSxWj8wSpRrpmnZPjh6pf2B3T1WWTg3yKM17o8FBqXTuanVbcoJdlzSQVSPSKRNr2YrDveoMFUnbNrgfTOfceAD/AAnIg+BhXoV1Ud8H4XAAZOz8CI/JUoKLHsV2JpYfEfVEjYubmM0L2aMLKbxyB9Vb7UhzVKWhWAezPJe7Io6+3CaNsus4EBiQ5Eq1GEMqZFE48rTsMzRHQu+aqZcrJuzUmm7o76BTyr4hQXCEuZ94RzRZC3HvlSx+QjzBP60T1NqRE5jXj1TjJ6LmwDoKbq02uyLQfEApRdGuS6Qk0Exr2g0W/aX4GhrWkNgc8IJPqUR3eucdENGrYEcpzT2+9Afaqo54T/0aqtuttF1Ku4OzDjhd0iMJHh9Vvg1GMaGcm9svjmhlNrImS3F5uEqwsdkqzcOkT5o8x2Up5o4IUrzCIS//AFEqPRtCczkPVPdiz+L4LK1CxT//2Q==",
    clinic: "Women's Wellness Center",
  },
  {
    id: 2,
    name: "Dr. Rohan Malhotra",
    specialization: "Infertility Specialist",
    image:
      "https://www.raosentcare.com/wp-content/uploads/2021/06/DrChaitanyaRao.jpg",
    clinic: "New Life Fertility Clinic",
  },
  {
    id: 3,
    name: "Dr. Meera Gupta",
    specialization: "Dermatologist",
    image:
      "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Dr.+K+Meena+-+Best+Medical+Oncologist+in+Hyderabad-+Telangana-640w.jpg",
    clinic: "Radiant Skin Institute",
  },
  {
    id: 4,
    name: "Dr. Sanjay Patel",
    specialization: "Cardiologist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCX24JYqj1xKE86hXjsjdZrQ9o4_S9zb6ww&s",
    clinic: "HeartCare Excellence Center",
  },
  {
    id: 5,
    name: "Dr. Kavita Desai",
    specialization: "Orthopedic Surgeon",
    image: "https://www.drsuminareddy.com/images/dr-sumina-reddy.jpg",
    clinic: "Joint & Spine Specialists",
  },
  {
    id: 6,
    name: "Dr. Nikhil Verma",
    specialization: "Neurologist",
    image:
      "https://www.portea.com/static/86d34fbc8306b7f62dae2b08aa754e4f/b728a/banner-img-doctor.jpg",
    clinic: "Brain & Nerve Care Center",
  },
  {
    id: 7,
    name: "Dr. Akanksha Iyer",
    specialization: "Pediatrician",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGBTTa8Pu1NTitffwugCdkFDM1ZXcjL34JA&s",
    clinic: "Little Ones Children's Clinic",
  },
  {
    id: 8,
    name: "Dr. Sunil Mehta",
    specialization: "ENT Specialist",
    image:
      "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Dr+Govind+Verma+-+Best+Gastroenterologist-+Hepatologist+%28Liver+Specialist%29-+Pancreatologist+-+Endosonologist+in+Hyderabad-+India-640w.jpg",
    clinic: "Ear Nose Throat Solutions",
  },
  {
    id: 9,
    name: "Dr. Arjun Singh",
    specialization: "Oncologist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ311HTluiQzUF8sVogtHzq7U5ExX_cT4E9Qw&s",
    clinic: "Hope Cancer Care Institute",
  },
  {
    id: 10,
    name: "Dr. Priya Kapoor",
    specialization: "Psychiatrist",
    image:
      "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Dr.+Kaku+Madhurya+-+Best+general+physician+in+Hyderabad-+lady+general+physician+in+hitech+city-640w.jpg",
    clinic: "Mind Wellness Psychiatry",
  },
  {
    id: 11,
    name: "Dr. Sneha Bhatt",
    specialization: "Dentist",
    image:
      "https://continentalhospitals.com/images/doctors/b24f7e2e933ee56b900fb0eb3d46fa34.jpg",
    clinic: "Bright Smile Dental Care",
  },
  {
    id: 12,
    name: "Dr. Vivek Ghosh",
    specialization: "General Surgeon",
    image:
      "https://www.carehospitals.com/assets/images/main/dr-aditya-goparaju.png",
    clinic: "Advanced Surgical Center",
  },
  {
    id: 13,
    name: "Dr. Rina Mukherjee",
    specialization: "Urologist",
    image:
      "https://sravanihospitals.com/wp-content/uploads/2024/02/dr-alekhya-g-1691494631.png",
    clinic: "Urology & Kidney Care Clinic",
  },
  {
    id: 14,
    name: "Dr. Varun Kapoor",
    specialization: "Endocrinologist",
    image:
      "https://threebestrated.in/images/DrGVSRaoMBBSMSDRRAOSENTSUPERSPECIALITYINTERNATIONALHOSPITAL-Hyderabad-TS.jpeg",
    clinic: "Hormone Health Institute",
  },
  {
    id: 15,
    name: "Dr. Suman Desai",
    specialization: "Hematologist",
    image: "https://www.carehospitals.com/assets/images/main/dr-kishore.png",
    clinic: "Blood Disorders Treatment Center",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const goToDoctorProfile = (doctor) => {
    navigate(`/doctor/${doctor.name}`, { state: { doctor } });
  };

  useEffect(() => {
    const results = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDoctors(results);
  }, [searchTerm]);

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h1>Find the Right Doctor, Right Now</h1>
            <p>Book appointments with top-rated doctors in your area</p>
            <div className="search-container">
              <div className="search-bar">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Search by name or specialty"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="filter-button">
                <Filter size={20} />
                <span className="filter-text">Filter</span>
              </button>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="feature">
            <Calendar size={40} />
            <h3>Easy Scheduling</h3>
            <p>Book appointments hassle-free</p>
          </div>
          <div className="feature">
            <Star size={40} />
            <h3>Top-Rated Doctors</h3>
            <p>Choose from highly rated professionals</p>
          </div>
        </section>
        <section className="doctor-list">
          <h2>Our Doctors</h2>
          <div className="doctor-grid">
            {filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                {...doctor}
                onCall={() => alert("Calling Doctor...")}
                onClick={() => goToDoctorProfile(doctor)}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
