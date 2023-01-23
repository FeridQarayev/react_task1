import React from "react";
import styled from "./home.module.scss";

function Home() {
  return (
    <div className={styled.home}>
      <div
        style={{
          backgroundImage: `url(https://www.shutterstock.com/image-photo/notary-public-wax-stamper-seal-260nw-709613977.jpg)`,
        }}
        className={styled.home__title}
      >
        <div className={styled.home__title__card}>
          <h1>Notary Public & Legal Solutions</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            reprehenderit architecto voluptates perferendis temporibus ipsam
            provident, non totam, possimus voluptate, minima labore nulla
          </p>
        </div>
      </div>

      <div className={styled.home__content}>
        <div className={styled.home__content__body}>
          <div className={styled.home__content__body__title}>
            <h1>
              Practice <span>Areas</span>
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
              commodi?
            </p>
          </div>
          <div className={styled.home__content__body__cards}>
            <div className={styled.home__content__body__cards__card}>
              <div className={styled.home__content__body__cards__card__content}>
                <img
                  src="https://media.istockphoto.com/id/900791430/vector/bank-building-isolated-on-white-background-vector-illustration-flat-style.jpg?s=612x612&w=0&k=20&c=jc8wpyoZZ3I1qnz8xEfKf-P-dry-SqJyeaZkIEWOl34="
                  alt="bank"
                />
                <h3>Bankruptey Law</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, eum? Nobis illum eos reprehenderit, modi expedita quam
                  voluptatum.
                </p>
              </div>
            </div>
            <div className={styled.home__content__body__cards__card}>
              <div className={styled.home__content__body__cards__card__content}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/45/45091.png"
                  alt="bank"
                />
                <h3>Bankruptey Law</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, eum? Nobis illum eos reprehenderit, modi expedita quam
                  voluptatum.
                </p>
              </div>
            </div>
            <div className={styled.home__content__body__cards__card}>
              <div className={styled.home__content__body__cards__card__content}>
                <img
                  src="https://cdn4.vectorstock.com/i/1000x1000/94/53/hand-money-business-woman-take-dollars-buying-vector-28149453.jpg"
                  alt="bank"
                />
                <h3>Bankruptey Law</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, eum? Nobis illum eos reprehenderit, modi expedita quam
                  voluptatum.
                </p>
              </div>
            </div>
            <div className={styled.home__content__body__cards__card}>
              <div className={styled.home__content__body__cards__card__content}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSj3naXX6uFGf9HhnLm9_lFbiC-ayfgKtgfSMlaoT85SrihCVTgUKoN5bmTCY8PjTfYHY&usqp=CAU"
                  alt="bank"
                />
                <h3>Bankruptey Law</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, eum? Nobis illum eos reprehenderit, modi expedita quam
                  voluptatum.
                </p>
              </div>
            </div>
            <div className={styled.home__content__body__cards__card}>
              <div className={styled.home__content__body__cards__card__content}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeo8gin5goNUd4wyWODIvYPchIppVfTFzpHzj5EnGUeZXIvmwK37NnPZCKlAFH927dkc&usqp=CAU"
                  alt="bank"
                />
                <h3>Bankruptey Law</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, eum? Nobis illum eos reprehenderit, modi expedita quam
                  voluptatum.
                </p>
              </div>
            </div>
            <div className={styled.home__content__body__cards__card}>
              <div className={styled.home__content__body__cards__card__content}>
                <img
                  src="https://t4.ftcdn.net/jpg/02/02/23/29/360_F_202232908_DHnVu2uRw7ValxiPBDpWbyJu5ZuiXnXb.jpg"
                  alt="bank"
                />
                <h3>Bankruptey Law</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, eum? Nobis illum eos reprehenderit, modi expedita quam
                  voluptatum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styled.home__provide}>
        <div className={styled.home__provide__body}>
          <div className={styled.home__provide__body__left}>
            <img
              src="https://w0.peakpx.com/wallpaper/341/345/HD-wallpaper-bogdana-beautiful-beauty-cute-face-gorgeous-grey-eyes-portrait-pretty-simple.jpg"
              alt="girl"
            />
            <img
              src="https://c8.alamy.com/comp/BB48GK/portrait-of-an-azeri-man-in-baku-azerbaijan-BB48GK.jpg"
              alt="man"
            />
          </div>
          <div className={styled.home__provide__body__right}>
            <div>
              <h1>We Provide Highly Reliable & Effective Legal Solutions</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci reiciendis et aliquid omnis id possimus! Praesentium
                quisquam a cum suscipit voluptates, modi corrupti facilis
                eveniet nam minus nobis quae atque cupiditate laboriosam illo!
                Ullam, tempora. Autem quia amet doloribus atque est officia aut
                alias corrupti voluptatum inventore totam pariatur ducimus
                dolorum cum culpa reprehenderit, sit quisquam provident. Culpa,
                suscipit cumque!
              </p>
              <button>Book an appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
