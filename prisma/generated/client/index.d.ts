
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TipoArticulo
 * 
 */
export type TipoArticulo = $Result.DefaultSelection<Prisma.$TipoArticuloPayload>
/**
 * Model PuntoDonacion
 * 
 */
export type PuntoDonacion = $Result.DefaultSelection<Prisma.$PuntoDonacionPayload>
/**
 * Model ArticuloOferta
 * 
 */
export type ArticuloOferta = $Result.DefaultSelection<Prisma.$ArticuloOfertaPayload>
/**
 * Model Solicitud
 * 
 */
export type Solicitud = $Result.DefaultSelection<Prisma.$SolicitudPayload>
/**
 * Model ArticuloSolicitud
 * 
 */
export type ArticuloSolicitud = $Result.DefaultSelection<Prisma.$ArticuloSolicitudPayload>
/**
 * Model PeticionDonacion
 * 
 */
export type PeticionDonacion = $Result.DefaultSelection<Prisma.$PeticionDonacionPayload>
/**
 * Model ArticuloPeticion
 * 
 */
export type ArticuloPeticion = $Result.DefaultSelection<Prisma.$ArticuloPeticionPayload>
/**
 * Model SolicitudLimpieza
 * 
 */
export type SolicitudLimpieza = $Result.DefaultSelection<Prisma.$SolicitudLimpiezaPayload>
/**
 * Model MensajeContacto
 * 
 */
export type MensajeContacto = $Result.DefaultSelection<Prisma.$MensajeContactoPayload>
/**
 * Model InformacionUtil
 * 
 */
export type InformacionUtil = $Result.DefaultSelection<Prisma.$InformacionUtilPayload>
/**
 * Model Mensaje
 * @deprecated Use MensajeContacto o InformacionUtil instead
 */
export type Mensaje = $Result.DefaultSelection<Prisma.$MensajePayload>
/**
 * Model TipoArticuloPersonalizado
 * 
 */
export type TipoArticuloPersonalizado = $Result.DefaultSelection<Prisma.$TipoArticuloPersonalizadoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TipoArticulos
 * const tipoArticulos = await prisma.tipoArticulo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TipoArticulos
   * const tipoArticulos = await prisma.tipoArticulo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tipoArticulo`: Exposes CRUD operations for the **TipoArticulo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoArticulos
    * const tipoArticulos = await prisma.tipoArticulo.findMany()
    * ```
    */
  get tipoArticulo(): Prisma.TipoArticuloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.puntoDonacion`: Exposes CRUD operations for the **PuntoDonacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PuntoDonacions
    * const puntoDonacions = await prisma.puntoDonacion.findMany()
    * ```
    */
  get puntoDonacion(): Prisma.PuntoDonacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articuloOferta`: Exposes CRUD operations for the **ArticuloOferta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticuloOfertas
    * const articuloOfertas = await prisma.articuloOferta.findMany()
    * ```
    */
  get articuloOferta(): Prisma.ArticuloOfertaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solicitud`: Exposes CRUD operations for the **Solicitud** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solicituds
    * const solicituds = await prisma.solicitud.findMany()
    * ```
    */
  get solicitud(): Prisma.SolicitudDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articuloSolicitud`: Exposes CRUD operations for the **ArticuloSolicitud** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticuloSolicituds
    * const articuloSolicituds = await prisma.articuloSolicitud.findMany()
    * ```
    */
  get articuloSolicitud(): Prisma.ArticuloSolicitudDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peticionDonacion`: Exposes CRUD operations for the **PeticionDonacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PeticionDonacions
    * const peticionDonacions = await prisma.peticionDonacion.findMany()
    * ```
    */
  get peticionDonacion(): Prisma.PeticionDonacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articuloPeticion`: Exposes CRUD operations for the **ArticuloPeticion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticuloPeticions
    * const articuloPeticions = await prisma.articuloPeticion.findMany()
    * ```
    */
  get articuloPeticion(): Prisma.ArticuloPeticionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solicitudLimpieza`: Exposes CRUD operations for the **SolicitudLimpieza** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SolicitudLimpiezas
    * const solicitudLimpiezas = await prisma.solicitudLimpieza.findMany()
    * ```
    */
  get solicitudLimpieza(): Prisma.SolicitudLimpiezaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensajeContacto`: Exposes CRUD operations for the **MensajeContacto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MensajeContactos
    * const mensajeContactos = await prisma.mensajeContacto.findMany()
    * ```
    */
  get mensajeContacto(): Prisma.MensajeContactoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.informacionUtil`: Exposes CRUD operations for the **InformacionUtil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InformacionUtils
    * const informacionUtils = await prisma.informacionUtil.findMany()
    * ```
    */
  get informacionUtil(): Prisma.InformacionUtilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensaje`: Exposes CRUD operations for the **Mensaje** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensajes
    * const mensajes = await prisma.mensaje.findMany()
    * ```
    */
  get mensaje(): Prisma.MensajeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoArticuloPersonalizado`: Exposes CRUD operations for the **TipoArticuloPersonalizado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoArticuloPersonalizados
    * const tipoArticuloPersonalizados = await prisma.tipoArticuloPersonalizado.findMany()
    * ```
    */
  get tipoArticuloPersonalizado(): Prisma.TipoArticuloPersonalizadoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TipoArticulo: 'TipoArticulo',
    PuntoDonacion: 'PuntoDonacion',
    ArticuloOferta: 'ArticuloOferta',
    Solicitud: 'Solicitud',
    ArticuloSolicitud: 'ArticuloSolicitud',
    PeticionDonacion: 'PeticionDonacion',
    ArticuloPeticion: 'ArticuloPeticion',
    SolicitudLimpieza: 'SolicitudLimpieza',
    MensajeContacto: 'MensajeContacto',
    InformacionUtil: 'InformacionUtil',
    Mensaje: 'Mensaje',
    TipoArticuloPersonalizado: 'TipoArticuloPersonalizado'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tipoArticulo" | "puntoDonacion" | "articuloOferta" | "solicitud" | "articuloSolicitud" | "peticionDonacion" | "articuloPeticion" | "solicitudLimpieza" | "mensajeContacto" | "informacionUtil" | "mensaje" | "tipoArticuloPersonalizado"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TipoArticulo: {
        payload: Prisma.$TipoArticuloPayload<ExtArgs>
        fields: Prisma.TipoArticuloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoArticuloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoArticuloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>
          }
          findFirst: {
            args: Prisma.TipoArticuloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoArticuloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>
          }
          findMany: {
            args: Prisma.TipoArticuloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>[]
          }
          create: {
            args: Prisma.TipoArticuloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>
          }
          createMany: {
            args: Prisma.TipoArticuloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoArticuloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>[]
          }
          delete: {
            args: Prisma.TipoArticuloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>
          }
          update: {
            args: Prisma.TipoArticuloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>
          }
          deleteMany: {
            args: Prisma.TipoArticuloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoArticuloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoArticuloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>[]
          }
          upsert: {
            args: Prisma.TipoArticuloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>
          }
          aggregate: {
            args: Prisma.TipoArticuloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoArticulo>
          }
          groupBy: {
            args: Prisma.TipoArticuloGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoArticuloGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoArticuloCountArgs<ExtArgs>
            result: $Utils.Optional<TipoArticuloCountAggregateOutputType> | number
          }
        }
      }
      PuntoDonacion: {
        payload: Prisma.$PuntoDonacionPayload<ExtArgs>
        fields: Prisma.PuntoDonacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PuntoDonacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoDonacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PuntoDonacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoDonacionPayload>
          }
          findFirst: {
            args: Prisma.PuntoDonacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoDonacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PuntoDonacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoDonacionPayload>
          }
          findMany: {
            args: Prisma.PuntoDonacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoDonacionPayload>[]
          }
          create: {
            args: Prisma.PuntoDonacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoDonacionPayload>
          }
          createMany: {
            args: Prisma.PuntoDonacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PuntoDonacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoDonacionPayload>[]
          }
          delete: {
            args: Prisma.PuntoDonacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoDonacionPayload>
          }
          update: {
            args: Prisma.PuntoDonacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoDonacionPayload>
          }
          deleteMany: {
            args: Prisma.PuntoDonacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PuntoDonacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PuntoDonacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoDonacionPayload>[]
          }
          upsert: {
            args: Prisma.PuntoDonacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoDonacionPayload>
          }
          aggregate: {
            args: Prisma.PuntoDonacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePuntoDonacion>
          }
          groupBy: {
            args: Prisma.PuntoDonacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PuntoDonacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PuntoDonacionCountArgs<ExtArgs>
            result: $Utils.Optional<PuntoDonacionCountAggregateOutputType> | number
          }
        }
      }
      ArticuloOferta: {
        payload: Prisma.$ArticuloOfertaPayload<ExtArgs>
        fields: Prisma.ArticuloOfertaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticuloOfertaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticuloOfertaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>
          }
          findFirst: {
            args: Prisma.ArticuloOfertaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticuloOfertaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>
          }
          findMany: {
            args: Prisma.ArticuloOfertaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>[]
          }
          create: {
            args: Prisma.ArticuloOfertaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>
          }
          createMany: {
            args: Prisma.ArticuloOfertaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticuloOfertaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>[]
          }
          delete: {
            args: Prisma.ArticuloOfertaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>
          }
          update: {
            args: Prisma.ArticuloOfertaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>
          }
          deleteMany: {
            args: Prisma.ArticuloOfertaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticuloOfertaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticuloOfertaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>[]
          }
          upsert: {
            args: Prisma.ArticuloOfertaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>
          }
          aggregate: {
            args: Prisma.ArticuloOfertaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticuloOferta>
          }
          groupBy: {
            args: Prisma.ArticuloOfertaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticuloOfertaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticuloOfertaCountArgs<ExtArgs>
            result: $Utils.Optional<ArticuloOfertaCountAggregateOutputType> | number
          }
        }
      }
      Solicitud: {
        payload: Prisma.$SolicitudPayload<ExtArgs>
        fields: Prisma.SolicitudFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolicitudFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolicitudFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          findFirst: {
            args: Prisma.SolicitudFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolicitudFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          findMany: {
            args: Prisma.SolicitudFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>[]
          }
          create: {
            args: Prisma.SolicitudCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          createMany: {
            args: Prisma.SolicitudCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolicitudCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>[]
          }
          delete: {
            args: Prisma.SolicitudDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          update: {
            args: Prisma.SolicitudUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          deleteMany: {
            args: Prisma.SolicitudDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolicitudUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolicitudUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>[]
          }
          upsert: {
            args: Prisma.SolicitudUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          aggregate: {
            args: Prisma.SolicitudAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolicitud>
          }
          groupBy: {
            args: Prisma.SolicitudGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolicitudGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolicitudCountArgs<ExtArgs>
            result: $Utils.Optional<SolicitudCountAggregateOutputType> | number
          }
        }
      }
      ArticuloSolicitud: {
        payload: Prisma.$ArticuloSolicitudPayload<ExtArgs>
        fields: Prisma.ArticuloSolicitudFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticuloSolicitudFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticuloSolicitudFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>
          }
          findFirst: {
            args: Prisma.ArticuloSolicitudFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticuloSolicitudFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>
          }
          findMany: {
            args: Prisma.ArticuloSolicitudFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>[]
          }
          create: {
            args: Prisma.ArticuloSolicitudCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>
          }
          createMany: {
            args: Prisma.ArticuloSolicitudCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticuloSolicitudCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>[]
          }
          delete: {
            args: Prisma.ArticuloSolicitudDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>
          }
          update: {
            args: Prisma.ArticuloSolicitudUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>
          }
          deleteMany: {
            args: Prisma.ArticuloSolicitudDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticuloSolicitudUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticuloSolicitudUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>[]
          }
          upsert: {
            args: Prisma.ArticuloSolicitudUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>
          }
          aggregate: {
            args: Prisma.ArticuloSolicitudAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticuloSolicitud>
          }
          groupBy: {
            args: Prisma.ArticuloSolicitudGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticuloSolicitudGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticuloSolicitudCountArgs<ExtArgs>
            result: $Utils.Optional<ArticuloSolicitudCountAggregateOutputType> | number
          }
        }
      }
      PeticionDonacion: {
        payload: Prisma.$PeticionDonacionPayload<ExtArgs>
        fields: Prisma.PeticionDonacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeticionDonacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeticionDonacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>
          }
          findFirst: {
            args: Prisma.PeticionDonacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeticionDonacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>
          }
          findMany: {
            args: Prisma.PeticionDonacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>[]
          }
          create: {
            args: Prisma.PeticionDonacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>
          }
          createMany: {
            args: Prisma.PeticionDonacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeticionDonacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>[]
          }
          delete: {
            args: Prisma.PeticionDonacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>
          }
          update: {
            args: Prisma.PeticionDonacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>
          }
          deleteMany: {
            args: Prisma.PeticionDonacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeticionDonacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeticionDonacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>[]
          }
          upsert: {
            args: Prisma.PeticionDonacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>
          }
          aggregate: {
            args: Prisma.PeticionDonacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeticionDonacion>
          }
          groupBy: {
            args: Prisma.PeticionDonacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeticionDonacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeticionDonacionCountArgs<ExtArgs>
            result: $Utils.Optional<PeticionDonacionCountAggregateOutputType> | number
          }
        }
      }
      ArticuloPeticion: {
        payload: Prisma.$ArticuloPeticionPayload<ExtArgs>
        fields: Prisma.ArticuloPeticionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticuloPeticionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticuloPeticionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>
          }
          findFirst: {
            args: Prisma.ArticuloPeticionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticuloPeticionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>
          }
          findMany: {
            args: Prisma.ArticuloPeticionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>[]
          }
          create: {
            args: Prisma.ArticuloPeticionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>
          }
          createMany: {
            args: Prisma.ArticuloPeticionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticuloPeticionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>[]
          }
          delete: {
            args: Prisma.ArticuloPeticionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>
          }
          update: {
            args: Prisma.ArticuloPeticionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>
          }
          deleteMany: {
            args: Prisma.ArticuloPeticionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticuloPeticionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticuloPeticionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>[]
          }
          upsert: {
            args: Prisma.ArticuloPeticionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>
          }
          aggregate: {
            args: Prisma.ArticuloPeticionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticuloPeticion>
          }
          groupBy: {
            args: Prisma.ArticuloPeticionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticuloPeticionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticuloPeticionCountArgs<ExtArgs>
            result: $Utils.Optional<ArticuloPeticionCountAggregateOutputType> | number
          }
        }
      }
      SolicitudLimpieza: {
        payload: Prisma.$SolicitudLimpiezaPayload<ExtArgs>
        fields: Prisma.SolicitudLimpiezaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolicitudLimpiezaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudLimpiezaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolicitudLimpiezaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudLimpiezaPayload>
          }
          findFirst: {
            args: Prisma.SolicitudLimpiezaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudLimpiezaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolicitudLimpiezaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudLimpiezaPayload>
          }
          findMany: {
            args: Prisma.SolicitudLimpiezaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudLimpiezaPayload>[]
          }
          create: {
            args: Prisma.SolicitudLimpiezaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudLimpiezaPayload>
          }
          createMany: {
            args: Prisma.SolicitudLimpiezaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolicitudLimpiezaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudLimpiezaPayload>[]
          }
          delete: {
            args: Prisma.SolicitudLimpiezaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudLimpiezaPayload>
          }
          update: {
            args: Prisma.SolicitudLimpiezaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudLimpiezaPayload>
          }
          deleteMany: {
            args: Prisma.SolicitudLimpiezaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolicitudLimpiezaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolicitudLimpiezaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudLimpiezaPayload>[]
          }
          upsert: {
            args: Prisma.SolicitudLimpiezaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudLimpiezaPayload>
          }
          aggregate: {
            args: Prisma.SolicitudLimpiezaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolicitudLimpieza>
          }
          groupBy: {
            args: Prisma.SolicitudLimpiezaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolicitudLimpiezaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolicitudLimpiezaCountArgs<ExtArgs>
            result: $Utils.Optional<SolicitudLimpiezaCountAggregateOutputType> | number
          }
        }
      }
      MensajeContacto: {
        payload: Prisma.$MensajeContactoPayload<ExtArgs>
        fields: Prisma.MensajeContactoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensajeContactoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeContactoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensajeContactoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeContactoPayload>
          }
          findFirst: {
            args: Prisma.MensajeContactoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeContactoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensajeContactoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeContactoPayload>
          }
          findMany: {
            args: Prisma.MensajeContactoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeContactoPayload>[]
          }
          create: {
            args: Prisma.MensajeContactoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeContactoPayload>
          }
          createMany: {
            args: Prisma.MensajeContactoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensajeContactoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeContactoPayload>[]
          }
          delete: {
            args: Prisma.MensajeContactoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeContactoPayload>
          }
          update: {
            args: Prisma.MensajeContactoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeContactoPayload>
          }
          deleteMany: {
            args: Prisma.MensajeContactoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensajeContactoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MensajeContactoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeContactoPayload>[]
          }
          upsert: {
            args: Prisma.MensajeContactoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeContactoPayload>
          }
          aggregate: {
            args: Prisma.MensajeContactoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensajeContacto>
          }
          groupBy: {
            args: Prisma.MensajeContactoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensajeContactoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensajeContactoCountArgs<ExtArgs>
            result: $Utils.Optional<MensajeContactoCountAggregateOutputType> | number
          }
        }
      }
      InformacionUtil: {
        payload: Prisma.$InformacionUtilPayload<ExtArgs>
        fields: Prisma.InformacionUtilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InformacionUtilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InformacionUtilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InformacionUtilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InformacionUtilPayload>
          }
          findFirst: {
            args: Prisma.InformacionUtilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InformacionUtilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InformacionUtilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InformacionUtilPayload>
          }
          findMany: {
            args: Prisma.InformacionUtilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InformacionUtilPayload>[]
          }
          create: {
            args: Prisma.InformacionUtilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InformacionUtilPayload>
          }
          createMany: {
            args: Prisma.InformacionUtilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InformacionUtilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InformacionUtilPayload>[]
          }
          delete: {
            args: Prisma.InformacionUtilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InformacionUtilPayload>
          }
          update: {
            args: Prisma.InformacionUtilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InformacionUtilPayload>
          }
          deleteMany: {
            args: Prisma.InformacionUtilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InformacionUtilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InformacionUtilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InformacionUtilPayload>[]
          }
          upsert: {
            args: Prisma.InformacionUtilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InformacionUtilPayload>
          }
          aggregate: {
            args: Prisma.InformacionUtilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInformacionUtil>
          }
          groupBy: {
            args: Prisma.InformacionUtilGroupByArgs<ExtArgs>
            result: $Utils.Optional<InformacionUtilGroupByOutputType>[]
          }
          count: {
            args: Prisma.InformacionUtilCountArgs<ExtArgs>
            result: $Utils.Optional<InformacionUtilCountAggregateOutputType> | number
          }
        }
      }
      Mensaje: {
        payload: Prisma.$MensajePayload<ExtArgs>
        fields: Prisma.MensajeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensajeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensajeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          findFirst: {
            args: Prisma.MensajeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensajeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          findMany: {
            args: Prisma.MensajeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          create: {
            args: Prisma.MensajeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          createMany: {
            args: Prisma.MensajeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensajeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          delete: {
            args: Prisma.MensajeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          update: {
            args: Prisma.MensajeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          deleteMany: {
            args: Prisma.MensajeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensajeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MensajeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          upsert: {
            args: Prisma.MensajeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          aggregate: {
            args: Prisma.MensajeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensaje>
          }
          groupBy: {
            args: Prisma.MensajeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensajeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensajeCountArgs<ExtArgs>
            result: $Utils.Optional<MensajeCountAggregateOutputType> | number
          }
        }
      }
      TipoArticuloPersonalizado: {
        payload: Prisma.$TipoArticuloPersonalizadoPayload<ExtArgs>
        fields: Prisma.TipoArticuloPersonalizadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoArticuloPersonalizadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPersonalizadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoArticuloPersonalizadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPersonalizadoPayload>
          }
          findFirst: {
            args: Prisma.TipoArticuloPersonalizadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPersonalizadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoArticuloPersonalizadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPersonalizadoPayload>
          }
          findMany: {
            args: Prisma.TipoArticuloPersonalizadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPersonalizadoPayload>[]
          }
          create: {
            args: Prisma.TipoArticuloPersonalizadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPersonalizadoPayload>
          }
          createMany: {
            args: Prisma.TipoArticuloPersonalizadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoArticuloPersonalizadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPersonalizadoPayload>[]
          }
          delete: {
            args: Prisma.TipoArticuloPersonalizadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPersonalizadoPayload>
          }
          update: {
            args: Prisma.TipoArticuloPersonalizadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPersonalizadoPayload>
          }
          deleteMany: {
            args: Prisma.TipoArticuloPersonalizadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoArticuloPersonalizadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoArticuloPersonalizadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPersonalizadoPayload>[]
          }
          upsert: {
            args: Prisma.TipoArticuloPersonalizadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPersonalizadoPayload>
          }
          aggregate: {
            args: Prisma.TipoArticuloPersonalizadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoArticuloPersonalizado>
          }
          groupBy: {
            args: Prisma.TipoArticuloPersonalizadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoArticuloPersonalizadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoArticuloPersonalizadoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoArticuloPersonalizadoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tipoArticulo?: TipoArticuloOmit
    puntoDonacion?: PuntoDonacionOmit
    articuloOferta?: ArticuloOfertaOmit
    solicitud?: SolicitudOmit
    articuloSolicitud?: ArticuloSolicitudOmit
    peticionDonacion?: PeticionDonacionOmit
    articuloPeticion?: ArticuloPeticionOmit
    solicitudLimpieza?: SolicitudLimpiezaOmit
    mensajeContacto?: MensajeContactoOmit
    informacionUtil?: InformacionUtilOmit
    mensaje?: MensajeOmit
    tipoArticuloPersonalizado?: TipoArticuloPersonalizadoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TipoArticuloCountOutputType
   */

  export type TipoArticuloCountOutputType = {
    articulosOferta: number
    articulosPeticion: number
    articulosSolicitud: number
  }

  export type TipoArticuloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulosOferta?: boolean | TipoArticuloCountOutputTypeCountArticulosOfertaArgs
    articulosPeticion?: boolean | TipoArticuloCountOutputTypeCountArticulosPeticionArgs
    articulosSolicitud?: boolean | TipoArticuloCountOutputTypeCountArticulosSolicitudArgs
  }

  // Custom InputTypes
  /**
   * TipoArticuloCountOutputType without action
   */
  export type TipoArticuloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloCountOutputType
     */
    select?: TipoArticuloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoArticuloCountOutputType without action
   */
  export type TipoArticuloCountOutputTypeCountArticulosOfertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloOfertaWhereInput
  }

  /**
   * TipoArticuloCountOutputType without action
   */
  export type TipoArticuloCountOutputTypeCountArticulosPeticionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloPeticionWhereInput
  }

  /**
   * TipoArticuloCountOutputType without action
   */
  export type TipoArticuloCountOutputTypeCountArticulosSolicitudArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloSolicitudWhereInput
  }


  /**
   * Count Type PuntoDonacionCountOutputType
   */

  export type PuntoDonacionCountOutputType = {
    articulos: number
  }

  export type PuntoDonacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulos?: boolean | PuntoDonacionCountOutputTypeCountArticulosArgs
  }

  // Custom InputTypes
  /**
   * PuntoDonacionCountOutputType without action
   */
  export type PuntoDonacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoDonacionCountOutputType
     */
    select?: PuntoDonacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PuntoDonacionCountOutputType without action
   */
  export type PuntoDonacionCountOutputTypeCountArticulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloOfertaWhereInput
  }


  /**
   * Count Type SolicitudCountOutputType
   */

  export type SolicitudCountOutputType = {
    articulos: number
    tiposArticuloPersonalizados: number
  }

  export type SolicitudCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulos?: boolean | SolicitudCountOutputTypeCountArticulosArgs
    tiposArticuloPersonalizados?: boolean | SolicitudCountOutputTypeCountTiposArticuloPersonalizadosArgs
  }

  // Custom InputTypes
  /**
   * SolicitudCountOutputType without action
   */
  export type SolicitudCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudCountOutputType
     */
    select?: SolicitudCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SolicitudCountOutputType without action
   */
  export type SolicitudCountOutputTypeCountArticulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloSolicitudWhereInput
  }

  /**
   * SolicitudCountOutputType without action
   */
  export type SolicitudCountOutputTypeCountTiposArticuloPersonalizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoArticuloPersonalizadoWhereInput
  }


  /**
   * Count Type PeticionDonacionCountOutputType
   */

  export type PeticionDonacionCountOutputType = {
    articulos: number
  }

  export type PeticionDonacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulos?: boolean | PeticionDonacionCountOutputTypeCountArticulosArgs
  }

  // Custom InputTypes
  /**
   * PeticionDonacionCountOutputType without action
   */
  export type PeticionDonacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacionCountOutputType
     */
    select?: PeticionDonacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeticionDonacionCountOutputType without action
   */
  export type PeticionDonacionCountOutputTypeCountArticulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloPeticionWhereInput
  }


  /**
   * Count Type TipoArticuloPersonalizadoCountOutputType
   */

  export type TipoArticuloPersonalizadoCountOutputType = {
    ArticuloSolicitud: number
  }

  export type TipoArticuloPersonalizadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ArticuloSolicitud?: boolean | TipoArticuloPersonalizadoCountOutputTypeCountArticuloSolicitudArgs
  }

  // Custom InputTypes
  /**
   * TipoArticuloPersonalizadoCountOutputType without action
   */
  export type TipoArticuloPersonalizadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloPersonalizadoCountOutputType
     */
    select?: TipoArticuloPersonalizadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoArticuloPersonalizadoCountOutputType without action
   */
  export type TipoArticuloPersonalizadoCountOutputTypeCountArticuloSolicitudArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloSolicitudWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TipoArticulo
   */

  export type AggregateTipoArticulo = {
    _count: TipoArticuloCountAggregateOutputType | null
    _avg: TipoArticuloAvgAggregateOutputType | null
    _sum: TipoArticuloSumAggregateOutputType | null
    _min: TipoArticuloMinAggregateOutputType | null
    _max: TipoArticuloMaxAggregateOutputType | null
  }

  export type TipoArticuloAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoArticuloSumAggregateOutputType = {
    id: number | null
  }

  export type TipoArticuloMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    creadoEn: Date | null
  }

  export type TipoArticuloMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    creadoEn: Date | null
  }

  export type TipoArticuloCountAggregateOutputType = {
    id: number
    nombre: number
    creadoEn: number
    _all: number
  }


  export type TipoArticuloAvgAggregateInputType = {
    id?: true
  }

  export type TipoArticuloSumAggregateInputType = {
    id?: true
  }

  export type TipoArticuloMinAggregateInputType = {
    id?: true
    nombre?: true
    creadoEn?: true
  }

  export type TipoArticuloMaxAggregateInputType = {
    id?: true
    nombre?: true
    creadoEn?: true
  }

  export type TipoArticuloCountAggregateInputType = {
    id?: true
    nombre?: true
    creadoEn?: true
    _all?: true
  }

  export type TipoArticuloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoArticulo to aggregate.
     */
    where?: TipoArticuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoArticulos to fetch.
     */
    orderBy?: TipoArticuloOrderByWithRelationInput | TipoArticuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoArticuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoArticulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoArticulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoArticulos
    **/
    _count?: true | TipoArticuloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoArticuloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoArticuloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoArticuloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoArticuloMaxAggregateInputType
  }

  export type GetTipoArticuloAggregateType<T extends TipoArticuloAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoArticulo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoArticulo[P]>
      : GetScalarType<T[P], AggregateTipoArticulo[P]>
  }




  export type TipoArticuloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoArticuloWhereInput
    orderBy?: TipoArticuloOrderByWithAggregationInput | TipoArticuloOrderByWithAggregationInput[]
    by: TipoArticuloScalarFieldEnum[] | TipoArticuloScalarFieldEnum
    having?: TipoArticuloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoArticuloCountAggregateInputType | true
    _avg?: TipoArticuloAvgAggregateInputType
    _sum?: TipoArticuloSumAggregateInputType
    _min?: TipoArticuloMinAggregateInputType
    _max?: TipoArticuloMaxAggregateInputType
  }

  export type TipoArticuloGroupByOutputType = {
    id: number
    nombre: string
    creadoEn: Date
    _count: TipoArticuloCountAggregateOutputType | null
    _avg: TipoArticuloAvgAggregateOutputType | null
    _sum: TipoArticuloSumAggregateOutputType | null
    _min: TipoArticuloMinAggregateOutputType | null
    _max: TipoArticuloMaxAggregateOutputType | null
  }

  type GetTipoArticuloGroupByPayload<T extends TipoArticuloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoArticuloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoArticuloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoArticuloGroupByOutputType[P]>
            : GetScalarType<T[P], TipoArticuloGroupByOutputType[P]>
        }
      >
    >


  export type TipoArticuloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creadoEn?: boolean
    articulosOferta?: boolean | TipoArticulo$articulosOfertaArgs<ExtArgs>
    articulosPeticion?: boolean | TipoArticulo$articulosPeticionArgs<ExtArgs>
    articulosSolicitud?: boolean | TipoArticulo$articulosSolicitudArgs<ExtArgs>
    _count?: boolean | TipoArticuloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoArticulo"]>

  export type TipoArticuloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["tipoArticulo"]>

  export type TipoArticuloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["tipoArticulo"]>

  export type TipoArticuloSelectScalar = {
    id?: boolean
    nombre?: boolean
    creadoEn?: boolean
  }

  export type TipoArticuloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "creadoEn", ExtArgs["result"]["tipoArticulo"]>
  export type TipoArticuloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulosOferta?: boolean | TipoArticulo$articulosOfertaArgs<ExtArgs>
    articulosPeticion?: boolean | TipoArticulo$articulosPeticionArgs<ExtArgs>
    articulosSolicitud?: boolean | TipoArticulo$articulosSolicitudArgs<ExtArgs>
    _count?: boolean | TipoArticuloCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoArticuloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoArticuloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoArticuloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoArticulo"
    objects: {
      articulosOferta: Prisma.$ArticuloOfertaPayload<ExtArgs>[]
      articulosPeticion: Prisma.$ArticuloPeticionPayload<ExtArgs>[]
      articulosSolicitud: Prisma.$ArticuloSolicitudPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      creadoEn: Date
    }, ExtArgs["result"]["tipoArticulo"]>
    composites: {}
  }

  type TipoArticuloGetPayload<S extends boolean | null | undefined | TipoArticuloDefaultArgs> = $Result.GetResult<Prisma.$TipoArticuloPayload, S>

  type TipoArticuloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoArticuloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoArticuloCountAggregateInputType | true
    }

  export interface TipoArticuloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoArticulo'], meta: { name: 'TipoArticulo' } }
    /**
     * Find zero or one TipoArticulo that matches the filter.
     * @param {TipoArticuloFindUniqueArgs} args - Arguments to find a TipoArticulo
     * @example
     * // Get one TipoArticulo
     * const tipoArticulo = await prisma.tipoArticulo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoArticuloFindUniqueArgs>(args: SelectSubset<T, TipoArticuloFindUniqueArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoArticulo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoArticuloFindUniqueOrThrowArgs} args - Arguments to find a TipoArticulo
     * @example
     * // Get one TipoArticulo
     * const tipoArticulo = await prisma.tipoArticulo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoArticuloFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoArticuloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoArticulo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloFindFirstArgs} args - Arguments to find a TipoArticulo
     * @example
     * // Get one TipoArticulo
     * const tipoArticulo = await prisma.tipoArticulo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoArticuloFindFirstArgs>(args?: SelectSubset<T, TipoArticuloFindFirstArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoArticulo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloFindFirstOrThrowArgs} args - Arguments to find a TipoArticulo
     * @example
     * // Get one TipoArticulo
     * const tipoArticulo = await prisma.tipoArticulo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoArticuloFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoArticuloFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoArticulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoArticulos
     * const tipoArticulos = await prisma.tipoArticulo.findMany()
     * 
     * // Get first 10 TipoArticulos
     * const tipoArticulos = await prisma.tipoArticulo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoArticuloWithIdOnly = await prisma.tipoArticulo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoArticuloFindManyArgs>(args?: SelectSubset<T, TipoArticuloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoArticulo.
     * @param {TipoArticuloCreateArgs} args - Arguments to create a TipoArticulo.
     * @example
     * // Create one TipoArticulo
     * const TipoArticulo = await prisma.tipoArticulo.create({
     *   data: {
     *     // ... data to create a TipoArticulo
     *   }
     * })
     * 
     */
    create<T extends TipoArticuloCreateArgs>(args: SelectSubset<T, TipoArticuloCreateArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoArticulos.
     * @param {TipoArticuloCreateManyArgs} args - Arguments to create many TipoArticulos.
     * @example
     * // Create many TipoArticulos
     * const tipoArticulo = await prisma.tipoArticulo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoArticuloCreateManyArgs>(args?: SelectSubset<T, TipoArticuloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoArticulos and returns the data saved in the database.
     * @param {TipoArticuloCreateManyAndReturnArgs} args - Arguments to create many TipoArticulos.
     * @example
     * // Create many TipoArticulos
     * const tipoArticulo = await prisma.tipoArticulo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoArticulos and only return the `id`
     * const tipoArticuloWithIdOnly = await prisma.tipoArticulo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoArticuloCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoArticuloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoArticulo.
     * @param {TipoArticuloDeleteArgs} args - Arguments to delete one TipoArticulo.
     * @example
     * // Delete one TipoArticulo
     * const TipoArticulo = await prisma.tipoArticulo.delete({
     *   where: {
     *     // ... filter to delete one TipoArticulo
     *   }
     * })
     * 
     */
    delete<T extends TipoArticuloDeleteArgs>(args: SelectSubset<T, TipoArticuloDeleteArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoArticulo.
     * @param {TipoArticuloUpdateArgs} args - Arguments to update one TipoArticulo.
     * @example
     * // Update one TipoArticulo
     * const tipoArticulo = await prisma.tipoArticulo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoArticuloUpdateArgs>(args: SelectSubset<T, TipoArticuloUpdateArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoArticulos.
     * @param {TipoArticuloDeleteManyArgs} args - Arguments to filter TipoArticulos to delete.
     * @example
     * // Delete a few TipoArticulos
     * const { count } = await prisma.tipoArticulo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoArticuloDeleteManyArgs>(args?: SelectSubset<T, TipoArticuloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoArticulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoArticulos
     * const tipoArticulo = await prisma.tipoArticulo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoArticuloUpdateManyArgs>(args: SelectSubset<T, TipoArticuloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoArticulos and returns the data updated in the database.
     * @param {TipoArticuloUpdateManyAndReturnArgs} args - Arguments to update many TipoArticulos.
     * @example
     * // Update many TipoArticulos
     * const tipoArticulo = await prisma.tipoArticulo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoArticulos and only return the `id`
     * const tipoArticuloWithIdOnly = await prisma.tipoArticulo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoArticuloUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoArticuloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoArticulo.
     * @param {TipoArticuloUpsertArgs} args - Arguments to update or create a TipoArticulo.
     * @example
     * // Update or create a TipoArticulo
     * const tipoArticulo = await prisma.tipoArticulo.upsert({
     *   create: {
     *     // ... data to create a TipoArticulo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoArticulo we want to update
     *   }
     * })
     */
    upsert<T extends TipoArticuloUpsertArgs>(args: SelectSubset<T, TipoArticuloUpsertArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoArticulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloCountArgs} args - Arguments to filter TipoArticulos to count.
     * @example
     * // Count the number of TipoArticulos
     * const count = await prisma.tipoArticulo.count({
     *   where: {
     *     // ... the filter for the TipoArticulos we want to count
     *   }
     * })
    **/
    count<T extends TipoArticuloCountArgs>(
      args?: Subset<T, TipoArticuloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoArticuloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoArticulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoArticuloAggregateArgs>(args: Subset<T, TipoArticuloAggregateArgs>): Prisma.PrismaPromise<GetTipoArticuloAggregateType<T>>

    /**
     * Group by TipoArticulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoArticuloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoArticuloGroupByArgs['orderBy'] }
        : { orderBy?: TipoArticuloGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoArticuloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoArticuloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoArticulo model
   */
  readonly fields: TipoArticuloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoArticulo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoArticuloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articulosOferta<T extends TipoArticulo$articulosOfertaArgs<ExtArgs> = {}>(args?: Subset<T, TipoArticulo$articulosOfertaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articulosPeticion<T extends TipoArticulo$articulosPeticionArgs<ExtArgs> = {}>(args?: Subset<T, TipoArticulo$articulosPeticionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articulosSolicitud<T extends TipoArticulo$articulosSolicitudArgs<ExtArgs> = {}>(args?: Subset<T, TipoArticulo$articulosSolicitudArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoArticulo model
   */ 
  interface TipoArticuloFieldRefs {
    readonly id: FieldRef<"TipoArticulo", 'Int'>
    readonly nombre: FieldRef<"TipoArticulo", 'String'>
    readonly creadoEn: FieldRef<"TipoArticulo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipoArticulo findUnique
   */
  export type TipoArticuloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * Filter, which TipoArticulo to fetch.
     */
    where: TipoArticuloWhereUniqueInput
  }

  /**
   * TipoArticulo findUniqueOrThrow
   */
  export type TipoArticuloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * Filter, which TipoArticulo to fetch.
     */
    where: TipoArticuloWhereUniqueInput
  }

  /**
   * TipoArticulo findFirst
   */
  export type TipoArticuloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * Filter, which TipoArticulo to fetch.
     */
    where?: TipoArticuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoArticulos to fetch.
     */
    orderBy?: TipoArticuloOrderByWithRelationInput | TipoArticuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoArticulos.
     */
    cursor?: TipoArticuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoArticulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoArticulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoArticulos.
     */
    distinct?: TipoArticuloScalarFieldEnum | TipoArticuloScalarFieldEnum[]
  }

  /**
   * TipoArticulo findFirstOrThrow
   */
  export type TipoArticuloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * Filter, which TipoArticulo to fetch.
     */
    where?: TipoArticuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoArticulos to fetch.
     */
    orderBy?: TipoArticuloOrderByWithRelationInput | TipoArticuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoArticulos.
     */
    cursor?: TipoArticuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoArticulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoArticulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoArticulos.
     */
    distinct?: TipoArticuloScalarFieldEnum | TipoArticuloScalarFieldEnum[]
  }

  /**
   * TipoArticulo findMany
   */
  export type TipoArticuloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * Filter, which TipoArticulos to fetch.
     */
    where?: TipoArticuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoArticulos to fetch.
     */
    orderBy?: TipoArticuloOrderByWithRelationInput | TipoArticuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoArticulos.
     */
    cursor?: TipoArticuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoArticulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoArticulos.
     */
    skip?: number
    distinct?: TipoArticuloScalarFieldEnum | TipoArticuloScalarFieldEnum[]
  }

  /**
   * TipoArticulo create
   */
  export type TipoArticuloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoArticulo.
     */
    data: XOR<TipoArticuloCreateInput, TipoArticuloUncheckedCreateInput>
  }

  /**
   * TipoArticulo createMany
   */
  export type TipoArticuloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoArticulos.
     */
    data: TipoArticuloCreateManyInput | TipoArticuloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoArticulo createManyAndReturn
   */
  export type TipoArticuloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * The data used to create many TipoArticulos.
     */
    data: TipoArticuloCreateManyInput | TipoArticuloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoArticulo update
   */
  export type TipoArticuloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoArticulo.
     */
    data: XOR<TipoArticuloUpdateInput, TipoArticuloUncheckedUpdateInput>
    /**
     * Choose, which TipoArticulo to update.
     */
    where: TipoArticuloWhereUniqueInput
  }

  /**
   * TipoArticulo updateMany
   */
  export type TipoArticuloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoArticulos.
     */
    data: XOR<TipoArticuloUpdateManyMutationInput, TipoArticuloUncheckedUpdateManyInput>
    /**
     * Filter which TipoArticulos to update
     */
    where?: TipoArticuloWhereInput
    /**
     * Limit how many TipoArticulos to update.
     */
    limit?: number
  }

  /**
   * TipoArticulo updateManyAndReturn
   */
  export type TipoArticuloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * The data used to update TipoArticulos.
     */
    data: XOR<TipoArticuloUpdateManyMutationInput, TipoArticuloUncheckedUpdateManyInput>
    /**
     * Filter which TipoArticulos to update
     */
    where?: TipoArticuloWhereInput
    /**
     * Limit how many TipoArticulos to update.
     */
    limit?: number
  }

  /**
   * TipoArticulo upsert
   */
  export type TipoArticuloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoArticulo to update in case it exists.
     */
    where: TipoArticuloWhereUniqueInput
    /**
     * In case the TipoArticulo found by the `where` argument doesn't exist, create a new TipoArticulo with this data.
     */
    create: XOR<TipoArticuloCreateInput, TipoArticuloUncheckedCreateInput>
    /**
     * In case the TipoArticulo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoArticuloUpdateInput, TipoArticuloUncheckedUpdateInput>
  }

  /**
   * TipoArticulo delete
   */
  export type TipoArticuloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * Filter which TipoArticulo to delete.
     */
    where: TipoArticuloWhereUniqueInput
  }

  /**
   * TipoArticulo deleteMany
   */
  export type TipoArticuloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoArticulos to delete
     */
    where?: TipoArticuloWhereInput
    /**
     * Limit how many TipoArticulos to delete.
     */
    limit?: number
  }

  /**
   * TipoArticulo.articulosOferta
   */
  export type TipoArticulo$articulosOfertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    where?: ArticuloOfertaWhereInput
    orderBy?: ArticuloOfertaOrderByWithRelationInput | ArticuloOfertaOrderByWithRelationInput[]
    cursor?: ArticuloOfertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticuloOfertaScalarFieldEnum | ArticuloOfertaScalarFieldEnum[]
  }

  /**
   * TipoArticulo.articulosPeticion
   */
  export type TipoArticulo$articulosPeticionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    where?: ArticuloPeticionWhereInput
    orderBy?: ArticuloPeticionOrderByWithRelationInput | ArticuloPeticionOrderByWithRelationInput[]
    cursor?: ArticuloPeticionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticuloPeticionScalarFieldEnum | ArticuloPeticionScalarFieldEnum[]
  }

  /**
   * TipoArticulo.articulosSolicitud
   */
  export type TipoArticulo$articulosSolicitudArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    where?: ArticuloSolicitudWhereInput
    orderBy?: ArticuloSolicitudOrderByWithRelationInput | ArticuloSolicitudOrderByWithRelationInput[]
    cursor?: ArticuloSolicitudWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticuloSolicitudScalarFieldEnum | ArticuloSolicitudScalarFieldEnum[]
  }

  /**
   * TipoArticulo without action
   */
  export type TipoArticuloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
  }


  /**
   * Model PuntoDonacion
   */

  export type AggregatePuntoDonacion = {
    _count: PuntoDonacionCountAggregateOutputType | null
    _avg: PuntoDonacionAvgAggregateOutputType | null
    _sum: PuntoDonacionSumAggregateOutputType | null
    _min: PuntoDonacionMinAggregateOutputType | null
    _max: PuntoDonacionMaxAggregateOutputType | null
  }

  export type PuntoDonacionAvgAggregateOutputType = {
    id: number | null
    latitud: number | null
    longitud: number | null
  }

  export type PuntoDonacionSumAggregateOutputType = {
    id: number | null
    latitud: number | null
    longitud: number | null
  }

  export type PuntoDonacionMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    responsable: string | null
    telefono: string | null
    latitud: number | null
    longitud: number | null
    horarioApertura: string | null
    horarioCierre: string | null
    descripcion: string | null
    activo: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type PuntoDonacionMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    responsable: string | null
    telefono: string | null
    latitud: number | null
    longitud: number | null
    horarioApertura: string | null
    horarioCierre: string | null
    descripcion: string | null
    activo: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type PuntoDonacionCountAggregateOutputType = {
    id: number
    nombre: number
    direccion: number
    responsable: number
    telefono: number
    latitud: number
    longitud: number
    horarioApertura: number
    horarioCierre: number
    descripcion: number
    activo: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type PuntoDonacionAvgAggregateInputType = {
    id?: true
    latitud?: true
    longitud?: true
  }

  export type PuntoDonacionSumAggregateInputType = {
    id?: true
    latitud?: true
    longitud?: true
  }

  export type PuntoDonacionMinAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    responsable?: true
    telefono?: true
    latitud?: true
    longitud?: true
    horarioApertura?: true
    horarioCierre?: true
    descripcion?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type PuntoDonacionMaxAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    responsable?: true
    telefono?: true
    latitud?: true
    longitud?: true
    horarioApertura?: true
    horarioCierre?: true
    descripcion?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type PuntoDonacionCountAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    responsable?: true
    telefono?: true
    latitud?: true
    longitud?: true
    horarioApertura?: true
    horarioCierre?: true
    descripcion?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type PuntoDonacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PuntoDonacion to aggregate.
     */
    where?: PuntoDonacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PuntoDonacions to fetch.
     */
    orderBy?: PuntoDonacionOrderByWithRelationInput | PuntoDonacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PuntoDonacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PuntoDonacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PuntoDonacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PuntoDonacions
    **/
    _count?: true | PuntoDonacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PuntoDonacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PuntoDonacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PuntoDonacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PuntoDonacionMaxAggregateInputType
  }

  export type GetPuntoDonacionAggregateType<T extends PuntoDonacionAggregateArgs> = {
        [P in keyof T & keyof AggregatePuntoDonacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePuntoDonacion[P]>
      : GetScalarType<T[P], AggregatePuntoDonacion[P]>
  }




  export type PuntoDonacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PuntoDonacionWhereInput
    orderBy?: PuntoDonacionOrderByWithAggregationInput | PuntoDonacionOrderByWithAggregationInput[]
    by: PuntoDonacionScalarFieldEnum[] | PuntoDonacionScalarFieldEnum
    having?: PuntoDonacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PuntoDonacionCountAggregateInputType | true
    _avg?: PuntoDonacionAvgAggregateInputType
    _sum?: PuntoDonacionSumAggregateInputType
    _min?: PuntoDonacionMinAggregateInputType
    _max?: PuntoDonacionMaxAggregateInputType
  }

  export type PuntoDonacionGroupByOutputType = {
    id: number
    nombre: string | null
    direccion: string
    responsable: string
    telefono: string | null
    latitud: number
    longitud: number
    horarioApertura: string | null
    horarioCierre: string | null
    descripcion: string | null
    activo: boolean
    creadoEn: Date
    actualizadoEn: Date
    _count: PuntoDonacionCountAggregateOutputType | null
    _avg: PuntoDonacionAvgAggregateOutputType | null
    _sum: PuntoDonacionSumAggregateOutputType | null
    _min: PuntoDonacionMinAggregateOutputType | null
    _max: PuntoDonacionMaxAggregateOutputType | null
  }

  type GetPuntoDonacionGroupByPayload<T extends PuntoDonacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PuntoDonacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PuntoDonacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PuntoDonacionGroupByOutputType[P]>
            : GetScalarType<T[P], PuntoDonacionGroupByOutputType[P]>
        }
      >
    >


  export type PuntoDonacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    responsable?: boolean
    telefono?: boolean
    latitud?: boolean
    longitud?: boolean
    horarioApertura?: boolean
    horarioCierre?: boolean
    descripcion?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    articulos?: boolean | PuntoDonacion$articulosArgs<ExtArgs>
    _count?: boolean | PuntoDonacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["puntoDonacion"]>

  export type PuntoDonacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    responsable?: boolean
    telefono?: boolean
    latitud?: boolean
    longitud?: boolean
    horarioApertura?: boolean
    horarioCierre?: boolean
    descripcion?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["puntoDonacion"]>

  export type PuntoDonacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    responsable?: boolean
    telefono?: boolean
    latitud?: boolean
    longitud?: boolean
    horarioApertura?: boolean
    horarioCierre?: boolean
    descripcion?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["puntoDonacion"]>

  export type PuntoDonacionSelectScalar = {
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    responsable?: boolean
    telefono?: boolean
    latitud?: boolean
    longitud?: boolean
    horarioApertura?: boolean
    horarioCierre?: boolean
    descripcion?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type PuntoDonacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "direccion" | "responsable" | "telefono" | "latitud" | "longitud" | "horarioApertura" | "horarioCierre" | "descripcion" | "activo" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["puntoDonacion"]>
  export type PuntoDonacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulos?: boolean | PuntoDonacion$articulosArgs<ExtArgs>
    _count?: boolean | PuntoDonacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PuntoDonacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PuntoDonacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PuntoDonacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PuntoDonacion"
    objects: {
      articulos: Prisma.$ArticuloOfertaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      direccion: string
      responsable: string
      telefono: string | null
      latitud: number
      longitud: number
      horarioApertura: string | null
      horarioCierre: string | null
      descripcion: string | null
      activo: boolean
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["puntoDonacion"]>
    composites: {}
  }

  type PuntoDonacionGetPayload<S extends boolean | null | undefined | PuntoDonacionDefaultArgs> = $Result.GetResult<Prisma.$PuntoDonacionPayload, S>

  type PuntoDonacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PuntoDonacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PuntoDonacionCountAggregateInputType | true
    }

  export interface PuntoDonacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PuntoDonacion'], meta: { name: 'PuntoDonacion' } }
    /**
     * Find zero or one PuntoDonacion that matches the filter.
     * @param {PuntoDonacionFindUniqueArgs} args - Arguments to find a PuntoDonacion
     * @example
     * // Get one PuntoDonacion
     * const puntoDonacion = await prisma.puntoDonacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PuntoDonacionFindUniqueArgs>(args: SelectSubset<T, PuntoDonacionFindUniqueArgs<ExtArgs>>): Prisma__PuntoDonacionClient<$Result.GetResult<Prisma.$PuntoDonacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PuntoDonacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PuntoDonacionFindUniqueOrThrowArgs} args - Arguments to find a PuntoDonacion
     * @example
     * // Get one PuntoDonacion
     * const puntoDonacion = await prisma.puntoDonacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PuntoDonacionFindUniqueOrThrowArgs>(args: SelectSubset<T, PuntoDonacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PuntoDonacionClient<$Result.GetResult<Prisma.$PuntoDonacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PuntoDonacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoDonacionFindFirstArgs} args - Arguments to find a PuntoDonacion
     * @example
     * // Get one PuntoDonacion
     * const puntoDonacion = await prisma.puntoDonacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PuntoDonacionFindFirstArgs>(args?: SelectSubset<T, PuntoDonacionFindFirstArgs<ExtArgs>>): Prisma__PuntoDonacionClient<$Result.GetResult<Prisma.$PuntoDonacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PuntoDonacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoDonacionFindFirstOrThrowArgs} args - Arguments to find a PuntoDonacion
     * @example
     * // Get one PuntoDonacion
     * const puntoDonacion = await prisma.puntoDonacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PuntoDonacionFindFirstOrThrowArgs>(args?: SelectSubset<T, PuntoDonacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PuntoDonacionClient<$Result.GetResult<Prisma.$PuntoDonacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PuntoDonacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoDonacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PuntoDonacions
     * const puntoDonacions = await prisma.puntoDonacion.findMany()
     * 
     * // Get first 10 PuntoDonacions
     * const puntoDonacions = await prisma.puntoDonacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const puntoDonacionWithIdOnly = await prisma.puntoDonacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PuntoDonacionFindManyArgs>(args?: SelectSubset<T, PuntoDonacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuntoDonacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PuntoDonacion.
     * @param {PuntoDonacionCreateArgs} args - Arguments to create a PuntoDonacion.
     * @example
     * // Create one PuntoDonacion
     * const PuntoDonacion = await prisma.puntoDonacion.create({
     *   data: {
     *     // ... data to create a PuntoDonacion
     *   }
     * })
     * 
     */
    create<T extends PuntoDonacionCreateArgs>(args: SelectSubset<T, PuntoDonacionCreateArgs<ExtArgs>>): Prisma__PuntoDonacionClient<$Result.GetResult<Prisma.$PuntoDonacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PuntoDonacions.
     * @param {PuntoDonacionCreateManyArgs} args - Arguments to create many PuntoDonacions.
     * @example
     * // Create many PuntoDonacions
     * const puntoDonacion = await prisma.puntoDonacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PuntoDonacionCreateManyArgs>(args?: SelectSubset<T, PuntoDonacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PuntoDonacions and returns the data saved in the database.
     * @param {PuntoDonacionCreateManyAndReturnArgs} args - Arguments to create many PuntoDonacions.
     * @example
     * // Create many PuntoDonacions
     * const puntoDonacion = await prisma.puntoDonacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PuntoDonacions and only return the `id`
     * const puntoDonacionWithIdOnly = await prisma.puntoDonacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PuntoDonacionCreateManyAndReturnArgs>(args?: SelectSubset<T, PuntoDonacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuntoDonacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PuntoDonacion.
     * @param {PuntoDonacionDeleteArgs} args - Arguments to delete one PuntoDonacion.
     * @example
     * // Delete one PuntoDonacion
     * const PuntoDonacion = await prisma.puntoDonacion.delete({
     *   where: {
     *     // ... filter to delete one PuntoDonacion
     *   }
     * })
     * 
     */
    delete<T extends PuntoDonacionDeleteArgs>(args: SelectSubset<T, PuntoDonacionDeleteArgs<ExtArgs>>): Prisma__PuntoDonacionClient<$Result.GetResult<Prisma.$PuntoDonacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PuntoDonacion.
     * @param {PuntoDonacionUpdateArgs} args - Arguments to update one PuntoDonacion.
     * @example
     * // Update one PuntoDonacion
     * const puntoDonacion = await prisma.puntoDonacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PuntoDonacionUpdateArgs>(args: SelectSubset<T, PuntoDonacionUpdateArgs<ExtArgs>>): Prisma__PuntoDonacionClient<$Result.GetResult<Prisma.$PuntoDonacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PuntoDonacions.
     * @param {PuntoDonacionDeleteManyArgs} args - Arguments to filter PuntoDonacions to delete.
     * @example
     * // Delete a few PuntoDonacions
     * const { count } = await prisma.puntoDonacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PuntoDonacionDeleteManyArgs>(args?: SelectSubset<T, PuntoDonacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PuntoDonacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoDonacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PuntoDonacions
     * const puntoDonacion = await prisma.puntoDonacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PuntoDonacionUpdateManyArgs>(args: SelectSubset<T, PuntoDonacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PuntoDonacions and returns the data updated in the database.
     * @param {PuntoDonacionUpdateManyAndReturnArgs} args - Arguments to update many PuntoDonacions.
     * @example
     * // Update many PuntoDonacions
     * const puntoDonacion = await prisma.puntoDonacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PuntoDonacions and only return the `id`
     * const puntoDonacionWithIdOnly = await prisma.puntoDonacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PuntoDonacionUpdateManyAndReturnArgs>(args: SelectSubset<T, PuntoDonacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuntoDonacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PuntoDonacion.
     * @param {PuntoDonacionUpsertArgs} args - Arguments to update or create a PuntoDonacion.
     * @example
     * // Update or create a PuntoDonacion
     * const puntoDonacion = await prisma.puntoDonacion.upsert({
     *   create: {
     *     // ... data to create a PuntoDonacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PuntoDonacion we want to update
     *   }
     * })
     */
    upsert<T extends PuntoDonacionUpsertArgs>(args: SelectSubset<T, PuntoDonacionUpsertArgs<ExtArgs>>): Prisma__PuntoDonacionClient<$Result.GetResult<Prisma.$PuntoDonacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PuntoDonacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoDonacionCountArgs} args - Arguments to filter PuntoDonacions to count.
     * @example
     * // Count the number of PuntoDonacions
     * const count = await prisma.puntoDonacion.count({
     *   where: {
     *     // ... the filter for the PuntoDonacions we want to count
     *   }
     * })
    **/
    count<T extends PuntoDonacionCountArgs>(
      args?: Subset<T, PuntoDonacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PuntoDonacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PuntoDonacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoDonacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PuntoDonacionAggregateArgs>(args: Subset<T, PuntoDonacionAggregateArgs>): Prisma.PrismaPromise<GetPuntoDonacionAggregateType<T>>

    /**
     * Group by PuntoDonacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoDonacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PuntoDonacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PuntoDonacionGroupByArgs['orderBy'] }
        : { orderBy?: PuntoDonacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PuntoDonacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPuntoDonacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PuntoDonacion model
   */
  readonly fields: PuntoDonacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PuntoDonacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PuntoDonacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articulos<T extends PuntoDonacion$articulosArgs<ExtArgs> = {}>(args?: Subset<T, PuntoDonacion$articulosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PuntoDonacion model
   */ 
  interface PuntoDonacionFieldRefs {
    readonly id: FieldRef<"PuntoDonacion", 'Int'>
    readonly nombre: FieldRef<"PuntoDonacion", 'String'>
    readonly direccion: FieldRef<"PuntoDonacion", 'String'>
    readonly responsable: FieldRef<"PuntoDonacion", 'String'>
    readonly telefono: FieldRef<"PuntoDonacion", 'String'>
    readonly latitud: FieldRef<"PuntoDonacion", 'Float'>
    readonly longitud: FieldRef<"PuntoDonacion", 'Float'>
    readonly horarioApertura: FieldRef<"PuntoDonacion", 'String'>
    readonly horarioCierre: FieldRef<"PuntoDonacion", 'String'>
    readonly descripcion: FieldRef<"PuntoDonacion", 'String'>
    readonly activo: FieldRef<"PuntoDonacion", 'Boolean'>
    readonly creadoEn: FieldRef<"PuntoDonacion", 'DateTime'>
    readonly actualizadoEn: FieldRef<"PuntoDonacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PuntoDonacion findUnique
   */
  export type PuntoDonacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoDonacion
     */
    select?: PuntoDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoDonacion
     */
    omit?: PuntoDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoDonacionInclude<ExtArgs> | null
    /**
     * Filter, which PuntoDonacion to fetch.
     */
    where: PuntoDonacionWhereUniqueInput
  }

  /**
   * PuntoDonacion findUniqueOrThrow
   */
  export type PuntoDonacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoDonacion
     */
    select?: PuntoDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoDonacion
     */
    omit?: PuntoDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoDonacionInclude<ExtArgs> | null
    /**
     * Filter, which PuntoDonacion to fetch.
     */
    where: PuntoDonacionWhereUniqueInput
  }

  /**
   * PuntoDonacion findFirst
   */
  export type PuntoDonacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoDonacion
     */
    select?: PuntoDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoDonacion
     */
    omit?: PuntoDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoDonacionInclude<ExtArgs> | null
    /**
     * Filter, which PuntoDonacion to fetch.
     */
    where?: PuntoDonacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PuntoDonacions to fetch.
     */
    orderBy?: PuntoDonacionOrderByWithRelationInput | PuntoDonacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PuntoDonacions.
     */
    cursor?: PuntoDonacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PuntoDonacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PuntoDonacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PuntoDonacions.
     */
    distinct?: PuntoDonacionScalarFieldEnum | PuntoDonacionScalarFieldEnum[]
  }

  /**
   * PuntoDonacion findFirstOrThrow
   */
  export type PuntoDonacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoDonacion
     */
    select?: PuntoDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoDonacion
     */
    omit?: PuntoDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoDonacionInclude<ExtArgs> | null
    /**
     * Filter, which PuntoDonacion to fetch.
     */
    where?: PuntoDonacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PuntoDonacions to fetch.
     */
    orderBy?: PuntoDonacionOrderByWithRelationInput | PuntoDonacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PuntoDonacions.
     */
    cursor?: PuntoDonacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PuntoDonacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PuntoDonacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PuntoDonacions.
     */
    distinct?: PuntoDonacionScalarFieldEnum | PuntoDonacionScalarFieldEnum[]
  }

  /**
   * PuntoDonacion findMany
   */
  export type PuntoDonacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoDonacion
     */
    select?: PuntoDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoDonacion
     */
    omit?: PuntoDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoDonacionInclude<ExtArgs> | null
    /**
     * Filter, which PuntoDonacions to fetch.
     */
    where?: PuntoDonacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PuntoDonacions to fetch.
     */
    orderBy?: PuntoDonacionOrderByWithRelationInput | PuntoDonacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PuntoDonacions.
     */
    cursor?: PuntoDonacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PuntoDonacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PuntoDonacions.
     */
    skip?: number
    distinct?: PuntoDonacionScalarFieldEnum | PuntoDonacionScalarFieldEnum[]
  }

  /**
   * PuntoDonacion create
   */
  export type PuntoDonacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoDonacion
     */
    select?: PuntoDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoDonacion
     */
    omit?: PuntoDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoDonacionInclude<ExtArgs> | null
    /**
     * The data needed to create a PuntoDonacion.
     */
    data: XOR<PuntoDonacionCreateInput, PuntoDonacionUncheckedCreateInput>
  }

  /**
   * PuntoDonacion createMany
   */
  export type PuntoDonacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PuntoDonacions.
     */
    data: PuntoDonacionCreateManyInput | PuntoDonacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PuntoDonacion createManyAndReturn
   */
  export type PuntoDonacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoDonacion
     */
    select?: PuntoDonacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoDonacion
     */
    omit?: PuntoDonacionOmit<ExtArgs> | null
    /**
     * The data used to create many PuntoDonacions.
     */
    data: PuntoDonacionCreateManyInput | PuntoDonacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PuntoDonacion update
   */
  export type PuntoDonacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoDonacion
     */
    select?: PuntoDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoDonacion
     */
    omit?: PuntoDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoDonacionInclude<ExtArgs> | null
    /**
     * The data needed to update a PuntoDonacion.
     */
    data: XOR<PuntoDonacionUpdateInput, PuntoDonacionUncheckedUpdateInput>
    /**
     * Choose, which PuntoDonacion to update.
     */
    where: PuntoDonacionWhereUniqueInput
  }

  /**
   * PuntoDonacion updateMany
   */
  export type PuntoDonacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PuntoDonacions.
     */
    data: XOR<PuntoDonacionUpdateManyMutationInput, PuntoDonacionUncheckedUpdateManyInput>
    /**
     * Filter which PuntoDonacions to update
     */
    where?: PuntoDonacionWhereInput
    /**
     * Limit how many PuntoDonacions to update.
     */
    limit?: number
  }

  /**
   * PuntoDonacion updateManyAndReturn
   */
  export type PuntoDonacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoDonacion
     */
    select?: PuntoDonacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoDonacion
     */
    omit?: PuntoDonacionOmit<ExtArgs> | null
    /**
     * The data used to update PuntoDonacions.
     */
    data: XOR<PuntoDonacionUpdateManyMutationInput, PuntoDonacionUncheckedUpdateManyInput>
    /**
     * Filter which PuntoDonacions to update
     */
    where?: PuntoDonacionWhereInput
    /**
     * Limit how many PuntoDonacions to update.
     */
    limit?: number
  }

  /**
   * PuntoDonacion upsert
   */
  export type PuntoDonacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoDonacion
     */
    select?: PuntoDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoDonacion
     */
    omit?: PuntoDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoDonacionInclude<ExtArgs> | null
    /**
     * The filter to search for the PuntoDonacion to update in case it exists.
     */
    where: PuntoDonacionWhereUniqueInput
    /**
     * In case the PuntoDonacion found by the `where` argument doesn't exist, create a new PuntoDonacion with this data.
     */
    create: XOR<PuntoDonacionCreateInput, PuntoDonacionUncheckedCreateInput>
    /**
     * In case the PuntoDonacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PuntoDonacionUpdateInput, PuntoDonacionUncheckedUpdateInput>
  }

  /**
   * PuntoDonacion delete
   */
  export type PuntoDonacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoDonacion
     */
    select?: PuntoDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoDonacion
     */
    omit?: PuntoDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoDonacionInclude<ExtArgs> | null
    /**
     * Filter which PuntoDonacion to delete.
     */
    where: PuntoDonacionWhereUniqueInput
  }

  /**
   * PuntoDonacion deleteMany
   */
  export type PuntoDonacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PuntoDonacions to delete
     */
    where?: PuntoDonacionWhereInput
    /**
     * Limit how many PuntoDonacions to delete.
     */
    limit?: number
  }

  /**
   * PuntoDonacion.articulos
   */
  export type PuntoDonacion$articulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    where?: ArticuloOfertaWhereInput
    orderBy?: ArticuloOfertaOrderByWithRelationInput | ArticuloOfertaOrderByWithRelationInput[]
    cursor?: ArticuloOfertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticuloOfertaScalarFieldEnum | ArticuloOfertaScalarFieldEnum[]
  }

  /**
   * PuntoDonacion without action
   */
  export type PuntoDonacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoDonacion
     */
    select?: PuntoDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoDonacion
     */
    omit?: PuntoDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoDonacionInclude<ExtArgs> | null
  }


  /**
   * Model ArticuloOferta
   */

  export type AggregateArticuloOferta = {
    _count: ArticuloOfertaCountAggregateOutputType | null
    _avg: ArticuloOfertaAvgAggregateOutputType | null
    _sum: ArticuloOfertaSumAggregateOutputType | null
    _min: ArticuloOfertaMinAggregateOutputType | null
    _max: ArticuloOfertaMaxAggregateOutputType | null
  }

  export type ArticuloOfertaAvgAggregateOutputType = {
    id: number | null
    puntoDonacionId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
  }

  export type ArticuloOfertaSumAggregateOutputType = {
    id: number | null
    puntoDonacionId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
  }

  export type ArticuloOfertaMinAggregateOutputType = {
    id: number | null
    puntoDonacionId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
    estado: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ArticuloOfertaMaxAggregateOutputType = {
    id: number | null
    puntoDonacionId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
    estado: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ArticuloOfertaCountAggregateOutputType = {
    id: number
    puntoDonacionId: number
    tipoArticuloId: number
    cantidad: number
    estado: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type ArticuloOfertaAvgAggregateInputType = {
    id?: true
    puntoDonacionId?: true
    tipoArticuloId?: true
    cantidad?: true
  }

  export type ArticuloOfertaSumAggregateInputType = {
    id?: true
    puntoDonacionId?: true
    tipoArticuloId?: true
    cantidad?: true
  }

  export type ArticuloOfertaMinAggregateInputType = {
    id?: true
    puntoDonacionId?: true
    tipoArticuloId?: true
    cantidad?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ArticuloOfertaMaxAggregateInputType = {
    id?: true
    puntoDonacionId?: true
    tipoArticuloId?: true
    cantidad?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ArticuloOfertaCountAggregateInputType = {
    id?: true
    puntoDonacionId?: true
    tipoArticuloId?: true
    cantidad?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type ArticuloOfertaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticuloOferta to aggregate.
     */
    where?: ArticuloOfertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloOfertas to fetch.
     */
    orderBy?: ArticuloOfertaOrderByWithRelationInput | ArticuloOfertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticuloOfertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloOfertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloOfertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticuloOfertas
    **/
    _count?: true | ArticuloOfertaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticuloOfertaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticuloOfertaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticuloOfertaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticuloOfertaMaxAggregateInputType
  }

  export type GetArticuloOfertaAggregateType<T extends ArticuloOfertaAggregateArgs> = {
        [P in keyof T & keyof AggregateArticuloOferta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticuloOferta[P]>
      : GetScalarType<T[P], AggregateArticuloOferta[P]>
  }




  export type ArticuloOfertaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloOfertaWhereInput
    orderBy?: ArticuloOfertaOrderByWithAggregationInput | ArticuloOfertaOrderByWithAggregationInput[]
    by: ArticuloOfertaScalarFieldEnum[] | ArticuloOfertaScalarFieldEnum
    having?: ArticuloOfertaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticuloOfertaCountAggregateInputType | true
    _avg?: ArticuloOfertaAvgAggregateInputType
    _sum?: ArticuloOfertaSumAggregateInputType
    _min?: ArticuloOfertaMinAggregateInputType
    _max?: ArticuloOfertaMaxAggregateInputType
  }

  export type ArticuloOfertaGroupByOutputType = {
    id: number
    puntoDonacionId: number
    tipoArticuloId: number
    cantidad: number | null
    estado: string
    creadoEn: Date
    actualizadoEn: Date
    _count: ArticuloOfertaCountAggregateOutputType | null
    _avg: ArticuloOfertaAvgAggregateOutputType | null
    _sum: ArticuloOfertaSumAggregateOutputType | null
    _min: ArticuloOfertaMinAggregateOutputType | null
    _max: ArticuloOfertaMaxAggregateOutputType | null
  }

  type GetArticuloOfertaGroupByPayload<T extends ArticuloOfertaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticuloOfertaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticuloOfertaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticuloOfertaGroupByOutputType[P]>
            : GetScalarType<T[P], ArticuloOfertaGroupByOutputType[P]>
        }
      >
    >


  export type ArticuloOfertaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    puntoDonacionId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    puntoDonacion?: boolean | PuntoDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloOferta"]>

  export type ArticuloOfertaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    puntoDonacionId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    puntoDonacion?: boolean | PuntoDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloOferta"]>

  export type ArticuloOfertaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    puntoDonacionId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    puntoDonacion?: boolean | PuntoDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloOferta"]>

  export type ArticuloOfertaSelectScalar = {
    id?: boolean
    puntoDonacionId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type ArticuloOfertaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "puntoDonacionId" | "tipoArticuloId" | "cantidad" | "estado" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["articuloOferta"]>
  export type ArticuloOfertaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    puntoDonacion?: boolean | PuntoDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }
  export type ArticuloOfertaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    puntoDonacion?: boolean | PuntoDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }
  export type ArticuloOfertaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    puntoDonacion?: boolean | PuntoDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }

  export type $ArticuloOfertaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticuloOferta"
    objects: {
      puntoDonacion: Prisma.$PuntoDonacionPayload<ExtArgs>
      tipoArticulo: Prisma.$TipoArticuloPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      puntoDonacionId: number
      tipoArticuloId: number
      cantidad: number | null
      estado: string
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["articuloOferta"]>
    composites: {}
  }

  type ArticuloOfertaGetPayload<S extends boolean | null | undefined | ArticuloOfertaDefaultArgs> = $Result.GetResult<Prisma.$ArticuloOfertaPayload, S>

  type ArticuloOfertaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticuloOfertaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticuloOfertaCountAggregateInputType | true
    }

  export interface ArticuloOfertaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticuloOferta'], meta: { name: 'ArticuloOferta' } }
    /**
     * Find zero or one ArticuloOferta that matches the filter.
     * @param {ArticuloOfertaFindUniqueArgs} args - Arguments to find a ArticuloOferta
     * @example
     * // Get one ArticuloOferta
     * const articuloOferta = await prisma.articuloOferta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticuloOfertaFindUniqueArgs>(args: SelectSubset<T, ArticuloOfertaFindUniqueArgs<ExtArgs>>): Prisma__ArticuloOfertaClient<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticuloOferta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticuloOfertaFindUniqueOrThrowArgs} args - Arguments to find a ArticuloOferta
     * @example
     * // Get one ArticuloOferta
     * const articuloOferta = await prisma.articuloOferta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticuloOfertaFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticuloOfertaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticuloOfertaClient<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticuloOferta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloOfertaFindFirstArgs} args - Arguments to find a ArticuloOferta
     * @example
     * // Get one ArticuloOferta
     * const articuloOferta = await prisma.articuloOferta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticuloOfertaFindFirstArgs>(args?: SelectSubset<T, ArticuloOfertaFindFirstArgs<ExtArgs>>): Prisma__ArticuloOfertaClient<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticuloOferta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloOfertaFindFirstOrThrowArgs} args - Arguments to find a ArticuloOferta
     * @example
     * // Get one ArticuloOferta
     * const articuloOferta = await prisma.articuloOferta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticuloOfertaFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticuloOfertaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticuloOfertaClient<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticuloOfertas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloOfertaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticuloOfertas
     * const articuloOfertas = await prisma.articuloOferta.findMany()
     * 
     * // Get first 10 ArticuloOfertas
     * const articuloOfertas = await prisma.articuloOferta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articuloOfertaWithIdOnly = await prisma.articuloOferta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticuloOfertaFindManyArgs>(args?: SelectSubset<T, ArticuloOfertaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticuloOferta.
     * @param {ArticuloOfertaCreateArgs} args - Arguments to create a ArticuloOferta.
     * @example
     * // Create one ArticuloOferta
     * const ArticuloOferta = await prisma.articuloOferta.create({
     *   data: {
     *     // ... data to create a ArticuloOferta
     *   }
     * })
     * 
     */
    create<T extends ArticuloOfertaCreateArgs>(args: SelectSubset<T, ArticuloOfertaCreateArgs<ExtArgs>>): Prisma__ArticuloOfertaClient<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticuloOfertas.
     * @param {ArticuloOfertaCreateManyArgs} args - Arguments to create many ArticuloOfertas.
     * @example
     * // Create many ArticuloOfertas
     * const articuloOferta = await prisma.articuloOferta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticuloOfertaCreateManyArgs>(args?: SelectSubset<T, ArticuloOfertaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticuloOfertas and returns the data saved in the database.
     * @param {ArticuloOfertaCreateManyAndReturnArgs} args - Arguments to create many ArticuloOfertas.
     * @example
     * // Create many ArticuloOfertas
     * const articuloOferta = await prisma.articuloOferta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticuloOfertas and only return the `id`
     * const articuloOfertaWithIdOnly = await prisma.articuloOferta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticuloOfertaCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticuloOfertaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticuloOferta.
     * @param {ArticuloOfertaDeleteArgs} args - Arguments to delete one ArticuloOferta.
     * @example
     * // Delete one ArticuloOferta
     * const ArticuloOferta = await prisma.articuloOferta.delete({
     *   where: {
     *     // ... filter to delete one ArticuloOferta
     *   }
     * })
     * 
     */
    delete<T extends ArticuloOfertaDeleteArgs>(args: SelectSubset<T, ArticuloOfertaDeleteArgs<ExtArgs>>): Prisma__ArticuloOfertaClient<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticuloOferta.
     * @param {ArticuloOfertaUpdateArgs} args - Arguments to update one ArticuloOferta.
     * @example
     * // Update one ArticuloOferta
     * const articuloOferta = await prisma.articuloOferta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticuloOfertaUpdateArgs>(args: SelectSubset<T, ArticuloOfertaUpdateArgs<ExtArgs>>): Prisma__ArticuloOfertaClient<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticuloOfertas.
     * @param {ArticuloOfertaDeleteManyArgs} args - Arguments to filter ArticuloOfertas to delete.
     * @example
     * // Delete a few ArticuloOfertas
     * const { count } = await prisma.articuloOferta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticuloOfertaDeleteManyArgs>(args?: SelectSubset<T, ArticuloOfertaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticuloOfertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloOfertaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticuloOfertas
     * const articuloOferta = await prisma.articuloOferta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticuloOfertaUpdateManyArgs>(args: SelectSubset<T, ArticuloOfertaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticuloOfertas and returns the data updated in the database.
     * @param {ArticuloOfertaUpdateManyAndReturnArgs} args - Arguments to update many ArticuloOfertas.
     * @example
     * // Update many ArticuloOfertas
     * const articuloOferta = await prisma.articuloOferta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticuloOfertas and only return the `id`
     * const articuloOfertaWithIdOnly = await prisma.articuloOferta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticuloOfertaUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticuloOfertaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticuloOferta.
     * @param {ArticuloOfertaUpsertArgs} args - Arguments to update or create a ArticuloOferta.
     * @example
     * // Update or create a ArticuloOferta
     * const articuloOferta = await prisma.articuloOferta.upsert({
     *   create: {
     *     // ... data to create a ArticuloOferta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticuloOferta we want to update
     *   }
     * })
     */
    upsert<T extends ArticuloOfertaUpsertArgs>(args: SelectSubset<T, ArticuloOfertaUpsertArgs<ExtArgs>>): Prisma__ArticuloOfertaClient<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticuloOfertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloOfertaCountArgs} args - Arguments to filter ArticuloOfertas to count.
     * @example
     * // Count the number of ArticuloOfertas
     * const count = await prisma.articuloOferta.count({
     *   where: {
     *     // ... the filter for the ArticuloOfertas we want to count
     *   }
     * })
    **/
    count<T extends ArticuloOfertaCountArgs>(
      args?: Subset<T, ArticuloOfertaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticuloOfertaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticuloOferta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloOfertaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticuloOfertaAggregateArgs>(args: Subset<T, ArticuloOfertaAggregateArgs>): Prisma.PrismaPromise<GetArticuloOfertaAggregateType<T>>

    /**
     * Group by ArticuloOferta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloOfertaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticuloOfertaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticuloOfertaGroupByArgs['orderBy'] }
        : { orderBy?: ArticuloOfertaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticuloOfertaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticuloOfertaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticuloOferta model
   */
  readonly fields: ArticuloOfertaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticuloOferta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticuloOfertaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    puntoDonacion<T extends PuntoDonacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PuntoDonacionDefaultArgs<ExtArgs>>): Prisma__PuntoDonacionClient<$Result.GetResult<Prisma.$PuntoDonacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoArticulo<T extends TipoArticuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoArticuloDefaultArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticuloOferta model
   */ 
  interface ArticuloOfertaFieldRefs {
    readonly id: FieldRef<"ArticuloOferta", 'Int'>
    readonly puntoDonacionId: FieldRef<"ArticuloOferta", 'Int'>
    readonly tipoArticuloId: FieldRef<"ArticuloOferta", 'Int'>
    readonly cantidad: FieldRef<"ArticuloOferta", 'Int'>
    readonly estado: FieldRef<"ArticuloOferta", 'String'>
    readonly creadoEn: FieldRef<"ArticuloOferta", 'DateTime'>
    readonly actualizadoEn: FieldRef<"ArticuloOferta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticuloOferta findUnique
   */
  export type ArticuloOfertaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloOferta to fetch.
     */
    where: ArticuloOfertaWhereUniqueInput
  }

  /**
   * ArticuloOferta findUniqueOrThrow
   */
  export type ArticuloOfertaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloOferta to fetch.
     */
    where: ArticuloOfertaWhereUniqueInput
  }

  /**
   * ArticuloOferta findFirst
   */
  export type ArticuloOfertaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloOferta to fetch.
     */
    where?: ArticuloOfertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloOfertas to fetch.
     */
    orderBy?: ArticuloOfertaOrderByWithRelationInput | ArticuloOfertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticuloOfertas.
     */
    cursor?: ArticuloOfertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloOfertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloOfertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticuloOfertas.
     */
    distinct?: ArticuloOfertaScalarFieldEnum | ArticuloOfertaScalarFieldEnum[]
  }

  /**
   * ArticuloOferta findFirstOrThrow
   */
  export type ArticuloOfertaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloOferta to fetch.
     */
    where?: ArticuloOfertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloOfertas to fetch.
     */
    orderBy?: ArticuloOfertaOrderByWithRelationInput | ArticuloOfertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticuloOfertas.
     */
    cursor?: ArticuloOfertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloOfertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloOfertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticuloOfertas.
     */
    distinct?: ArticuloOfertaScalarFieldEnum | ArticuloOfertaScalarFieldEnum[]
  }

  /**
   * ArticuloOferta findMany
   */
  export type ArticuloOfertaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloOfertas to fetch.
     */
    where?: ArticuloOfertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloOfertas to fetch.
     */
    orderBy?: ArticuloOfertaOrderByWithRelationInput | ArticuloOfertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticuloOfertas.
     */
    cursor?: ArticuloOfertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloOfertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloOfertas.
     */
    skip?: number
    distinct?: ArticuloOfertaScalarFieldEnum | ArticuloOfertaScalarFieldEnum[]
  }

  /**
   * ArticuloOferta create
   */
  export type ArticuloOfertaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticuloOferta.
     */
    data: XOR<ArticuloOfertaCreateInput, ArticuloOfertaUncheckedCreateInput>
  }

  /**
   * ArticuloOferta createMany
   */
  export type ArticuloOfertaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticuloOfertas.
     */
    data: ArticuloOfertaCreateManyInput | ArticuloOfertaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticuloOferta createManyAndReturn
   */
  export type ArticuloOfertaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * The data used to create many ArticuloOfertas.
     */
    data: ArticuloOfertaCreateManyInput | ArticuloOfertaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticuloOferta update
   */
  export type ArticuloOfertaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticuloOferta.
     */
    data: XOR<ArticuloOfertaUpdateInput, ArticuloOfertaUncheckedUpdateInput>
    /**
     * Choose, which ArticuloOferta to update.
     */
    where: ArticuloOfertaWhereUniqueInput
  }

  /**
   * ArticuloOferta updateMany
   */
  export type ArticuloOfertaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticuloOfertas.
     */
    data: XOR<ArticuloOfertaUpdateManyMutationInput, ArticuloOfertaUncheckedUpdateManyInput>
    /**
     * Filter which ArticuloOfertas to update
     */
    where?: ArticuloOfertaWhereInput
    /**
     * Limit how many ArticuloOfertas to update.
     */
    limit?: number
  }

  /**
   * ArticuloOferta updateManyAndReturn
   */
  export type ArticuloOfertaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * The data used to update ArticuloOfertas.
     */
    data: XOR<ArticuloOfertaUpdateManyMutationInput, ArticuloOfertaUncheckedUpdateManyInput>
    /**
     * Filter which ArticuloOfertas to update
     */
    where?: ArticuloOfertaWhereInput
    /**
     * Limit how many ArticuloOfertas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticuloOferta upsert
   */
  export type ArticuloOfertaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticuloOferta to update in case it exists.
     */
    where: ArticuloOfertaWhereUniqueInput
    /**
     * In case the ArticuloOferta found by the `where` argument doesn't exist, create a new ArticuloOferta with this data.
     */
    create: XOR<ArticuloOfertaCreateInput, ArticuloOfertaUncheckedCreateInput>
    /**
     * In case the ArticuloOferta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticuloOfertaUpdateInput, ArticuloOfertaUncheckedUpdateInput>
  }

  /**
   * ArticuloOferta delete
   */
  export type ArticuloOfertaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * Filter which ArticuloOferta to delete.
     */
    where: ArticuloOfertaWhereUniqueInput
  }

  /**
   * ArticuloOferta deleteMany
   */
  export type ArticuloOfertaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticuloOfertas to delete
     */
    where?: ArticuloOfertaWhereInput
    /**
     * Limit how many ArticuloOfertas to delete.
     */
    limit?: number
  }

  /**
   * ArticuloOferta without action
   */
  export type ArticuloOfertaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
  }


  /**
   * Model Solicitud
   */

  export type AggregateSolicitud = {
    _count: SolicitudCountAggregateOutputType | null
    _avg: SolicitudAvgAggregateOutputType | null
    _sum: SolicitudSumAggregateOutputType | null
    _min: SolicitudMinAggregateOutputType | null
    _max: SolicitudMaxAggregateOutputType | null
  }

  export type SolicitudAvgAggregateOutputType = {
    id: number | null
    latitud: number | null
    longitud: number | null
  }

  export type SolicitudSumAggregateOutputType = {
    id: number | null
    latitud: number | null
    longitud: number | null
  }

  export type SolicitudMinAggregateOutputType = {
    id: number | null
    direccion: string | null
    contactoNombre: string | null
    contactoTel: string | null
    estado: string | null
    latitud: number | null
    longitud: number | null
    descripcion: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type SolicitudMaxAggregateOutputType = {
    id: number | null
    direccion: string | null
    contactoNombre: string | null
    contactoTel: string | null
    estado: string | null
    latitud: number | null
    longitud: number | null
    descripcion: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type SolicitudCountAggregateOutputType = {
    id: number
    direccion: number
    contactoNombre: number
    contactoTel: number
    estado: number
    latitud: number
    longitud: number
    descripcion: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type SolicitudAvgAggregateInputType = {
    id?: true
    latitud?: true
    longitud?: true
  }

  export type SolicitudSumAggregateInputType = {
    id?: true
    latitud?: true
    longitud?: true
  }

  export type SolicitudMinAggregateInputType = {
    id?: true
    direccion?: true
    contactoNombre?: true
    contactoTel?: true
    estado?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type SolicitudMaxAggregateInputType = {
    id?: true
    direccion?: true
    contactoNombre?: true
    contactoTel?: true
    estado?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type SolicitudCountAggregateInputType = {
    id?: true
    direccion?: true
    contactoNombre?: true
    contactoTel?: true
    estado?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type SolicitudAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solicitud to aggregate.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Solicituds
    **/
    _count?: true | SolicitudCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SolicitudAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SolicitudSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolicitudMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolicitudMaxAggregateInputType
  }

  export type GetSolicitudAggregateType<T extends SolicitudAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitud]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitud[P]>
      : GetScalarType<T[P], AggregateSolicitud[P]>
  }




  export type SolicitudGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitudWhereInput
    orderBy?: SolicitudOrderByWithAggregationInput | SolicitudOrderByWithAggregationInput[]
    by: SolicitudScalarFieldEnum[] | SolicitudScalarFieldEnum
    having?: SolicitudScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolicitudCountAggregateInputType | true
    _avg?: SolicitudAvgAggregateInputType
    _sum?: SolicitudSumAggregateInputType
    _min?: SolicitudMinAggregateInputType
    _max?: SolicitudMaxAggregateInputType
  }

  export type SolicitudGroupByOutputType = {
    id: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado: string
    latitud: number
    longitud: number
    descripcion: string | null
    creadoEn: Date
    actualizadoEn: Date
    _count: SolicitudCountAggregateOutputType | null
    _avg: SolicitudAvgAggregateOutputType | null
    _sum: SolicitudSumAggregateOutputType | null
    _min: SolicitudMinAggregateOutputType | null
    _max: SolicitudMaxAggregateOutputType | null
  }

  type GetSolicitudGroupByPayload<T extends SolicitudGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolicitudGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolicitudGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolicitudGroupByOutputType[P]>
            : GetScalarType<T[P], SolicitudGroupByOutputType[P]>
        }
      >
    >


  export type SolicitudSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    articulos?: boolean | Solicitud$articulosArgs<ExtArgs>
    tiposArticuloPersonalizados?: boolean | Solicitud$tiposArticuloPersonalizadosArgs<ExtArgs>
    _count?: boolean | SolicitudCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitud"]>

  export type SolicitudSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["solicitud"]>

  export type SolicitudSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["solicitud"]>

  export type SolicitudSelectScalar = {
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type SolicitudOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "direccion" | "contactoNombre" | "contactoTel" | "estado" | "latitud" | "longitud" | "descripcion" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["solicitud"]>
  export type SolicitudInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulos?: boolean | Solicitud$articulosArgs<ExtArgs>
    tiposArticuloPersonalizados?: boolean | Solicitud$tiposArticuloPersonalizadosArgs<ExtArgs>
    _count?: boolean | SolicitudCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SolicitudIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SolicitudIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SolicitudPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Solicitud"
    objects: {
      articulos: Prisma.$ArticuloSolicitudPayload<ExtArgs>[]
      tiposArticuloPersonalizados: Prisma.$TipoArticuloPersonalizadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      direccion: string
      contactoNombre: string
      contactoTel: string
      estado: string
      latitud: number
      longitud: number
      descripcion: string | null
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["solicitud"]>
    composites: {}
  }

  type SolicitudGetPayload<S extends boolean | null | undefined | SolicitudDefaultArgs> = $Result.GetResult<Prisma.$SolicitudPayload, S>

  type SolicitudCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolicitudFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolicitudCountAggregateInputType | true
    }

  export interface SolicitudDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Solicitud'], meta: { name: 'Solicitud' } }
    /**
     * Find zero or one Solicitud that matches the filter.
     * @param {SolicitudFindUniqueArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolicitudFindUniqueArgs>(args: SelectSubset<T, SolicitudFindUniqueArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Solicitud that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolicitudFindUniqueOrThrowArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolicitudFindUniqueOrThrowArgs>(args: SelectSubset<T, SolicitudFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitud that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudFindFirstArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolicitudFindFirstArgs>(args?: SelectSubset<T, SolicitudFindFirstArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitud that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudFindFirstOrThrowArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolicitudFindFirstOrThrowArgs>(args?: SelectSubset<T, SolicitudFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Solicituds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solicituds
     * const solicituds = await prisma.solicitud.findMany()
     * 
     * // Get first 10 Solicituds
     * const solicituds = await prisma.solicitud.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solicitudWithIdOnly = await prisma.solicitud.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolicitudFindManyArgs>(args?: SelectSubset<T, SolicitudFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Solicitud.
     * @param {SolicitudCreateArgs} args - Arguments to create a Solicitud.
     * @example
     * // Create one Solicitud
     * const Solicitud = await prisma.solicitud.create({
     *   data: {
     *     // ... data to create a Solicitud
     *   }
     * })
     * 
     */
    create<T extends SolicitudCreateArgs>(args: SelectSubset<T, SolicitudCreateArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Solicituds.
     * @param {SolicitudCreateManyArgs} args - Arguments to create many Solicituds.
     * @example
     * // Create many Solicituds
     * const solicitud = await prisma.solicitud.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolicitudCreateManyArgs>(args?: SelectSubset<T, SolicitudCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Solicituds and returns the data saved in the database.
     * @param {SolicitudCreateManyAndReturnArgs} args - Arguments to create many Solicituds.
     * @example
     * // Create many Solicituds
     * const solicitud = await prisma.solicitud.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Solicituds and only return the `id`
     * const solicitudWithIdOnly = await prisma.solicitud.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolicitudCreateManyAndReturnArgs>(args?: SelectSubset<T, SolicitudCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Solicitud.
     * @param {SolicitudDeleteArgs} args - Arguments to delete one Solicitud.
     * @example
     * // Delete one Solicitud
     * const Solicitud = await prisma.solicitud.delete({
     *   where: {
     *     // ... filter to delete one Solicitud
     *   }
     * })
     * 
     */
    delete<T extends SolicitudDeleteArgs>(args: SelectSubset<T, SolicitudDeleteArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Solicitud.
     * @param {SolicitudUpdateArgs} args - Arguments to update one Solicitud.
     * @example
     * // Update one Solicitud
     * const solicitud = await prisma.solicitud.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolicitudUpdateArgs>(args: SelectSubset<T, SolicitudUpdateArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Solicituds.
     * @param {SolicitudDeleteManyArgs} args - Arguments to filter Solicituds to delete.
     * @example
     * // Delete a few Solicituds
     * const { count } = await prisma.solicitud.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolicitudDeleteManyArgs>(args?: SelectSubset<T, SolicitudDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicituds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solicituds
     * const solicitud = await prisma.solicitud.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolicitudUpdateManyArgs>(args: SelectSubset<T, SolicitudUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicituds and returns the data updated in the database.
     * @param {SolicitudUpdateManyAndReturnArgs} args - Arguments to update many Solicituds.
     * @example
     * // Update many Solicituds
     * const solicitud = await prisma.solicitud.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Solicituds and only return the `id`
     * const solicitudWithIdOnly = await prisma.solicitud.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SolicitudUpdateManyAndReturnArgs>(args: SelectSubset<T, SolicitudUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Solicitud.
     * @param {SolicitudUpsertArgs} args - Arguments to update or create a Solicitud.
     * @example
     * // Update or create a Solicitud
     * const solicitud = await prisma.solicitud.upsert({
     *   create: {
     *     // ... data to create a Solicitud
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solicitud we want to update
     *   }
     * })
     */
    upsert<T extends SolicitudUpsertArgs>(args: SelectSubset<T, SolicitudUpsertArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Solicituds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudCountArgs} args - Arguments to filter Solicituds to count.
     * @example
     * // Count the number of Solicituds
     * const count = await prisma.solicitud.count({
     *   where: {
     *     // ... the filter for the Solicituds we want to count
     *   }
     * })
    **/
    count<T extends SolicitudCountArgs>(
      args?: Subset<T, SolicitudCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolicitudCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solicitud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SolicitudAggregateArgs>(args: Subset<T, SolicitudAggregateArgs>): Prisma.PrismaPromise<GetSolicitudAggregateType<T>>

    /**
     * Group by Solicitud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SolicitudGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolicitudGroupByArgs['orderBy'] }
        : { orderBy?: SolicitudGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SolicitudGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitudGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Solicitud model
   */
  readonly fields: SolicitudFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Solicitud.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolicitudClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articulos<T extends Solicitud$articulosArgs<ExtArgs> = {}>(args?: Subset<T, Solicitud$articulosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tiposArticuloPersonalizados<T extends Solicitud$tiposArticuloPersonalizadosArgs<ExtArgs> = {}>(args?: Subset<T, Solicitud$tiposArticuloPersonalizadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoArticuloPersonalizadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Solicitud model
   */ 
  interface SolicitudFieldRefs {
    readonly id: FieldRef<"Solicitud", 'Int'>
    readonly direccion: FieldRef<"Solicitud", 'String'>
    readonly contactoNombre: FieldRef<"Solicitud", 'String'>
    readonly contactoTel: FieldRef<"Solicitud", 'String'>
    readonly estado: FieldRef<"Solicitud", 'String'>
    readonly latitud: FieldRef<"Solicitud", 'Float'>
    readonly longitud: FieldRef<"Solicitud", 'Float'>
    readonly descripcion: FieldRef<"Solicitud", 'String'>
    readonly creadoEn: FieldRef<"Solicitud", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Solicitud", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Solicitud findUnique
   */
  export type SolicitudFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where: SolicitudWhereUniqueInput
  }

  /**
   * Solicitud findUniqueOrThrow
   */
  export type SolicitudFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where: SolicitudWhereUniqueInput
  }

  /**
   * Solicitud findFirst
   */
  export type SolicitudFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solicituds.
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicituds.
     */
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Solicitud findFirstOrThrow
   */
  export type SolicitudFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solicituds.
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicituds.
     */
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Solicitud findMany
   */
  export type SolicitudFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicituds to fetch.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Solicituds.
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Solicitud create
   */
  export type SolicitudCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * The data needed to create a Solicitud.
     */
    data: XOR<SolicitudCreateInput, SolicitudUncheckedCreateInput>
  }

  /**
   * Solicitud createMany
   */
  export type SolicitudCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Solicituds.
     */
    data: SolicitudCreateManyInput | SolicitudCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Solicitud createManyAndReturn
   */
  export type SolicitudCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * The data used to create many Solicituds.
     */
    data: SolicitudCreateManyInput | SolicitudCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Solicitud update
   */
  export type SolicitudUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * The data needed to update a Solicitud.
     */
    data: XOR<SolicitudUpdateInput, SolicitudUncheckedUpdateInput>
    /**
     * Choose, which Solicitud to update.
     */
    where: SolicitudWhereUniqueInput
  }

  /**
   * Solicitud updateMany
   */
  export type SolicitudUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Solicituds.
     */
    data: XOR<SolicitudUpdateManyMutationInput, SolicitudUncheckedUpdateManyInput>
    /**
     * Filter which Solicituds to update
     */
    where?: SolicitudWhereInput
    /**
     * Limit how many Solicituds to update.
     */
    limit?: number
  }

  /**
   * Solicitud updateManyAndReturn
   */
  export type SolicitudUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * The data used to update Solicituds.
     */
    data: XOR<SolicitudUpdateManyMutationInput, SolicitudUncheckedUpdateManyInput>
    /**
     * Filter which Solicituds to update
     */
    where?: SolicitudWhereInput
    /**
     * Limit how many Solicituds to update.
     */
    limit?: number
  }

  /**
   * Solicitud upsert
   */
  export type SolicitudUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * The filter to search for the Solicitud to update in case it exists.
     */
    where: SolicitudWhereUniqueInput
    /**
     * In case the Solicitud found by the `where` argument doesn't exist, create a new Solicitud with this data.
     */
    create: XOR<SolicitudCreateInput, SolicitudUncheckedCreateInput>
    /**
     * In case the Solicitud was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolicitudUpdateInput, SolicitudUncheckedUpdateInput>
  }

  /**
   * Solicitud delete
   */
  export type SolicitudDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter which Solicitud to delete.
     */
    where: SolicitudWhereUniqueInput
  }

  /**
   * Solicitud deleteMany
   */
  export type SolicitudDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solicituds to delete
     */
    where?: SolicitudWhereInput
    /**
     * Limit how many Solicituds to delete.
     */
    limit?: number
  }

  /**
   * Solicitud.articulos
   */
  export type Solicitud$articulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    where?: ArticuloSolicitudWhereInput
    orderBy?: ArticuloSolicitudOrderByWithRelationInput | ArticuloSolicitudOrderByWithRelationInput[]
    cursor?: ArticuloSolicitudWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticuloSolicitudScalarFieldEnum | ArticuloSolicitudScalarFieldEnum[]
  }

  /**
   * Solicitud.tiposArticuloPersonalizados
   */
  export type Solicitud$tiposArticuloPersonalizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloPersonalizado
     */
    select?: TipoArticuloPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticuloPersonalizado
     */
    omit?: TipoArticuloPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloPersonalizadoInclude<ExtArgs> | null
    where?: TipoArticuloPersonalizadoWhereInput
    orderBy?: TipoArticuloPersonalizadoOrderByWithRelationInput | TipoArticuloPersonalizadoOrderByWithRelationInput[]
    cursor?: TipoArticuloPersonalizadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TipoArticuloPersonalizadoScalarFieldEnum | TipoArticuloPersonalizadoScalarFieldEnum[]
  }

  /**
   * Solicitud without action
   */
  export type SolicitudDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
  }


  /**
   * Model ArticuloSolicitud
   */

  export type AggregateArticuloSolicitud = {
    _count: ArticuloSolicitudCountAggregateOutputType | null
    _avg: ArticuloSolicitudAvgAggregateOutputType | null
    _sum: ArticuloSolicitudSumAggregateOutputType | null
    _min: ArticuloSolicitudMinAggregateOutputType | null
    _max: ArticuloSolicitudMaxAggregateOutputType | null
  }

  export type ArticuloSolicitudAvgAggregateOutputType = {
    id: number | null
    solicitudId: number | null
    tipoArticuloId: number | null
    tipoArticuloPersonalizadoId: number | null
    cantidad: number | null
  }

  export type ArticuloSolicitudSumAggregateOutputType = {
    id: number | null
    solicitudId: number | null
    tipoArticuloId: number | null
    tipoArticuloPersonalizadoId: number | null
    cantidad: number | null
  }

  export type ArticuloSolicitudMinAggregateOutputType = {
    id: number | null
    solicitudId: number | null
    tipoArticuloId: number | null
    tipoArticuloPersonalizadoId: number | null
    cantidad: number | null
    creadoEn: Date | null
  }

  export type ArticuloSolicitudMaxAggregateOutputType = {
    id: number | null
    solicitudId: number | null
    tipoArticuloId: number | null
    tipoArticuloPersonalizadoId: number | null
    cantidad: number | null
    creadoEn: Date | null
  }

  export type ArticuloSolicitudCountAggregateOutputType = {
    id: number
    solicitudId: number
    tipoArticuloId: number
    tipoArticuloPersonalizadoId: number
    cantidad: number
    creadoEn: number
    _all: number
  }


  export type ArticuloSolicitudAvgAggregateInputType = {
    id?: true
    solicitudId?: true
    tipoArticuloId?: true
    tipoArticuloPersonalizadoId?: true
    cantidad?: true
  }

  export type ArticuloSolicitudSumAggregateInputType = {
    id?: true
    solicitudId?: true
    tipoArticuloId?: true
    tipoArticuloPersonalizadoId?: true
    cantidad?: true
  }

  export type ArticuloSolicitudMinAggregateInputType = {
    id?: true
    solicitudId?: true
    tipoArticuloId?: true
    tipoArticuloPersonalizadoId?: true
    cantidad?: true
    creadoEn?: true
  }

  export type ArticuloSolicitudMaxAggregateInputType = {
    id?: true
    solicitudId?: true
    tipoArticuloId?: true
    tipoArticuloPersonalizadoId?: true
    cantidad?: true
    creadoEn?: true
  }

  export type ArticuloSolicitudCountAggregateInputType = {
    id?: true
    solicitudId?: true
    tipoArticuloId?: true
    tipoArticuloPersonalizadoId?: true
    cantidad?: true
    creadoEn?: true
    _all?: true
  }

  export type ArticuloSolicitudAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticuloSolicitud to aggregate.
     */
    where?: ArticuloSolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloSolicituds to fetch.
     */
    orderBy?: ArticuloSolicitudOrderByWithRelationInput | ArticuloSolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticuloSolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloSolicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloSolicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticuloSolicituds
    **/
    _count?: true | ArticuloSolicitudCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticuloSolicitudAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticuloSolicitudSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticuloSolicitudMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticuloSolicitudMaxAggregateInputType
  }

  export type GetArticuloSolicitudAggregateType<T extends ArticuloSolicitudAggregateArgs> = {
        [P in keyof T & keyof AggregateArticuloSolicitud]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticuloSolicitud[P]>
      : GetScalarType<T[P], AggregateArticuloSolicitud[P]>
  }




  export type ArticuloSolicitudGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloSolicitudWhereInput
    orderBy?: ArticuloSolicitudOrderByWithAggregationInput | ArticuloSolicitudOrderByWithAggregationInput[]
    by: ArticuloSolicitudScalarFieldEnum[] | ArticuloSolicitudScalarFieldEnum
    having?: ArticuloSolicitudScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticuloSolicitudCountAggregateInputType | true
    _avg?: ArticuloSolicitudAvgAggregateInputType
    _sum?: ArticuloSolicitudSumAggregateInputType
    _min?: ArticuloSolicitudMinAggregateInputType
    _max?: ArticuloSolicitudMaxAggregateInputType
  }

  export type ArticuloSolicitudGroupByOutputType = {
    id: number
    solicitudId: number
    tipoArticuloId: number | null
    tipoArticuloPersonalizadoId: number | null
    cantidad: number
    creadoEn: Date
    _count: ArticuloSolicitudCountAggregateOutputType | null
    _avg: ArticuloSolicitudAvgAggregateOutputType | null
    _sum: ArticuloSolicitudSumAggregateOutputType | null
    _min: ArticuloSolicitudMinAggregateOutputType | null
    _max: ArticuloSolicitudMaxAggregateOutputType | null
  }

  type GetArticuloSolicitudGroupByPayload<T extends ArticuloSolicitudGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticuloSolicitudGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticuloSolicitudGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticuloSolicitudGroupByOutputType[P]>
            : GetScalarType<T[P], ArticuloSolicitudGroupByOutputType[P]>
        }
      >
    >


  export type ArticuloSolicitudSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitudId?: boolean
    tipoArticuloId?: boolean
    tipoArticuloPersonalizadoId?: boolean
    cantidad?: boolean
    creadoEn?: boolean
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | ArticuloSolicitud$tipoArticuloArgs<ExtArgs>
    tipoArticuloPersonalizado?: boolean | ArticuloSolicitud$tipoArticuloPersonalizadoArgs<ExtArgs>
  }, ExtArgs["result"]["articuloSolicitud"]>

  export type ArticuloSolicitudSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitudId?: boolean
    tipoArticuloId?: boolean
    tipoArticuloPersonalizadoId?: boolean
    cantidad?: boolean
    creadoEn?: boolean
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | ArticuloSolicitud$tipoArticuloArgs<ExtArgs>
    tipoArticuloPersonalizado?: boolean | ArticuloSolicitud$tipoArticuloPersonalizadoArgs<ExtArgs>
  }, ExtArgs["result"]["articuloSolicitud"]>

  export type ArticuloSolicitudSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitudId?: boolean
    tipoArticuloId?: boolean
    tipoArticuloPersonalizadoId?: boolean
    cantidad?: boolean
    creadoEn?: boolean
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | ArticuloSolicitud$tipoArticuloArgs<ExtArgs>
    tipoArticuloPersonalizado?: boolean | ArticuloSolicitud$tipoArticuloPersonalizadoArgs<ExtArgs>
  }, ExtArgs["result"]["articuloSolicitud"]>

  export type ArticuloSolicitudSelectScalar = {
    id?: boolean
    solicitudId?: boolean
    tipoArticuloId?: boolean
    tipoArticuloPersonalizadoId?: boolean
    cantidad?: boolean
    creadoEn?: boolean
  }

  export type ArticuloSolicitudOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "solicitudId" | "tipoArticuloId" | "tipoArticuloPersonalizadoId" | "cantidad" | "creadoEn", ExtArgs["result"]["articuloSolicitud"]>
  export type ArticuloSolicitudInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | ArticuloSolicitud$tipoArticuloArgs<ExtArgs>
    tipoArticuloPersonalizado?: boolean | ArticuloSolicitud$tipoArticuloPersonalizadoArgs<ExtArgs>
  }
  export type ArticuloSolicitudIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | ArticuloSolicitud$tipoArticuloArgs<ExtArgs>
    tipoArticuloPersonalizado?: boolean | ArticuloSolicitud$tipoArticuloPersonalizadoArgs<ExtArgs>
  }
  export type ArticuloSolicitudIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | ArticuloSolicitud$tipoArticuloArgs<ExtArgs>
    tipoArticuloPersonalizado?: boolean | ArticuloSolicitud$tipoArticuloPersonalizadoArgs<ExtArgs>
  }

  export type $ArticuloSolicitudPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticuloSolicitud"
    objects: {
      solicitud: Prisma.$SolicitudPayload<ExtArgs>
      tipoArticulo: Prisma.$TipoArticuloPayload<ExtArgs> | null
      tipoArticuloPersonalizado: Prisma.$TipoArticuloPersonalizadoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      solicitudId: number
      tipoArticuloId: number | null
      tipoArticuloPersonalizadoId: number | null
      cantidad: number
      creadoEn: Date
    }, ExtArgs["result"]["articuloSolicitud"]>
    composites: {}
  }

  type ArticuloSolicitudGetPayload<S extends boolean | null | undefined | ArticuloSolicitudDefaultArgs> = $Result.GetResult<Prisma.$ArticuloSolicitudPayload, S>

  type ArticuloSolicitudCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticuloSolicitudFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticuloSolicitudCountAggregateInputType | true
    }

  export interface ArticuloSolicitudDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticuloSolicitud'], meta: { name: 'ArticuloSolicitud' } }
    /**
     * Find zero or one ArticuloSolicitud that matches the filter.
     * @param {ArticuloSolicitudFindUniqueArgs} args - Arguments to find a ArticuloSolicitud
     * @example
     * // Get one ArticuloSolicitud
     * const articuloSolicitud = await prisma.articuloSolicitud.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticuloSolicitudFindUniqueArgs>(args: SelectSubset<T, ArticuloSolicitudFindUniqueArgs<ExtArgs>>): Prisma__ArticuloSolicitudClient<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticuloSolicitud that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticuloSolicitudFindUniqueOrThrowArgs} args - Arguments to find a ArticuloSolicitud
     * @example
     * // Get one ArticuloSolicitud
     * const articuloSolicitud = await prisma.articuloSolicitud.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticuloSolicitudFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticuloSolicitudFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticuloSolicitudClient<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticuloSolicitud that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitudFindFirstArgs} args - Arguments to find a ArticuloSolicitud
     * @example
     * // Get one ArticuloSolicitud
     * const articuloSolicitud = await prisma.articuloSolicitud.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticuloSolicitudFindFirstArgs>(args?: SelectSubset<T, ArticuloSolicitudFindFirstArgs<ExtArgs>>): Prisma__ArticuloSolicitudClient<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticuloSolicitud that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitudFindFirstOrThrowArgs} args - Arguments to find a ArticuloSolicitud
     * @example
     * // Get one ArticuloSolicitud
     * const articuloSolicitud = await prisma.articuloSolicitud.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticuloSolicitudFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticuloSolicitudFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticuloSolicitudClient<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticuloSolicituds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitudFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticuloSolicituds
     * const articuloSolicituds = await prisma.articuloSolicitud.findMany()
     * 
     * // Get first 10 ArticuloSolicituds
     * const articuloSolicituds = await prisma.articuloSolicitud.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articuloSolicitudWithIdOnly = await prisma.articuloSolicitud.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticuloSolicitudFindManyArgs>(args?: SelectSubset<T, ArticuloSolicitudFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticuloSolicitud.
     * @param {ArticuloSolicitudCreateArgs} args - Arguments to create a ArticuloSolicitud.
     * @example
     * // Create one ArticuloSolicitud
     * const ArticuloSolicitud = await prisma.articuloSolicitud.create({
     *   data: {
     *     // ... data to create a ArticuloSolicitud
     *   }
     * })
     * 
     */
    create<T extends ArticuloSolicitudCreateArgs>(args: SelectSubset<T, ArticuloSolicitudCreateArgs<ExtArgs>>): Prisma__ArticuloSolicitudClient<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticuloSolicituds.
     * @param {ArticuloSolicitudCreateManyArgs} args - Arguments to create many ArticuloSolicituds.
     * @example
     * // Create many ArticuloSolicituds
     * const articuloSolicitud = await prisma.articuloSolicitud.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticuloSolicitudCreateManyArgs>(args?: SelectSubset<T, ArticuloSolicitudCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticuloSolicituds and returns the data saved in the database.
     * @param {ArticuloSolicitudCreateManyAndReturnArgs} args - Arguments to create many ArticuloSolicituds.
     * @example
     * // Create many ArticuloSolicituds
     * const articuloSolicitud = await prisma.articuloSolicitud.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticuloSolicituds and only return the `id`
     * const articuloSolicitudWithIdOnly = await prisma.articuloSolicitud.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticuloSolicitudCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticuloSolicitudCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticuloSolicitud.
     * @param {ArticuloSolicitudDeleteArgs} args - Arguments to delete one ArticuloSolicitud.
     * @example
     * // Delete one ArticuloSolicitud
     * const ArticuloSolicitud = await prisma.articuloSolicitud.delete({
     *   where: {
     *     // ... filter to delete one ArticuloSolicitud
     *   }
     * })
     * 
     */
    delete<T extends ArticuloSolicitudDeleteArgs>(args: SelectSubset<T, ArticuloSolicitudDeleteArgs<ExtArgs>>): Prisma__ArticuloSolicitudClient<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticuloSolicitud.
     * @param {ArticuloSolicitudUpdateArgs} args - Arguments to update one ArticuloSolicitud.
     * @example
     * // Update one ArticuloSolicitud
     * const articuloSolicitud = await prisma.articuloSolicitud.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticuloSolicitudUpdateArgs>(args: SelectSubset<T, ArticuloSolicitudUpdateArgs<ExtArgs>>): Prisma__ArticuloSolicitudClient<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticuloSolicituds.
     * @param {ArticuloSolicitudDeleteManyArgs} args - Arguments to filter ArticuloSolicituds to delete.
     * @example
     * // Delete a few ArticuloSolicituds
     * const { count } = await prisma.articuloSolicitud.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticuloSolicitudDeleteManyArgs>(args?: SelectSubset<T, ArticuloSolicitudDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticuloSolicituds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitudUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticuloSolicituds
     * const articuloSolicitud = await prisma.articuloSolicitud.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticuloSolicitudUpdateManyArgs>(args: SelectSubset<T, ArticuloSolicitudUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticuloSolicituds and returns the data updated in the database.
     * @param {ArticuloSolicitudUpdateManyAndReturnArgs} args - Arguments to update many ArticuloSolicituds.
     * @example
     * // Update many ArticuloSolicituds
     * const articuloSolicitud = await prisma.articuloSolicitud.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticuloSolicituds and only return the `id`
     * const articuloSolicitudWithIdOnly = await prisma.articuloSolicitud.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticuloSolicitudUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticuloSolicitudUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticuloSolicitud.
     * @param {ArticuloSolicitudUpsertArgs} args - Arguments to update or create a ArticuloSolicitud.
     * @example
     * // Update or create a ArticuloSolicitud
     * const articuloSolicitud = await prisma.articuloSolicitud.upsert({
     *   create: {
     *     // ... data to create a ArticuloSolicitud
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticuloSolicitud we want to update
     *   }
     * })
     */
    upsert<T extends ArticuloSolicitudUpsertArgs>(args: SelectSubset<T, ArticuloSolicitudUpsertArgs<ExtArgs>>): Prisma__ArticuloSolicitudClient<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticuloSolicituds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitudCountArgs} args - Arguments to filter ArticuloSolicituds to count.
     * @example
     * // Count the number of ArticuloSolicituds
     * const count = await prisma.articuloSolicitud.count({
     *   where: {
     *     // ... the filter for the ArticuloSolicituds we want to count
     *   }
     * })
    **/
    count<T extends ArticuloSolicitudCountArgs>(
      args?: Subset<T, ArticuloSolicitudCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticuloSolicitudCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticuloSolicitud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitudAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticuloSolicitudAggregateArgs>(args: Subset<T, ArticuloSolicitudAggregateArgs>): Prisma.PrismaPromise<GetArticuloSolicitudAggregateType<T>>

    /**
     * Group by ArticuloSolicitud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitudGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticuloSolicitudGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticuloSolicitudGroupByArgs['orderBy'] }
        : { orderBy?: ArticuloSolicitudGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticuloSolicitudGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticuloSolicitudGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticuloSolicitud model
   */
  readonly fields: ArticuloSolicitudFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticuloSolicitud.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticuloSolicitudClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    solicitud<T extends SolicitudDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SolicitudDefaultArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoArticulo<T extends ArticuloSolicitud$tipoArticuloArgs<ExtArgs> = {}>(args?: Subset<T, ArticuloSolicitud$tipoArticuloArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tipoArticuloPersonalizado<T extends ArticuloSolicitud$tipoArticuloPersonalizadoArgs<ExtArgs> = {}>(args?: Subset<T, ArticuloSolicitud$tipoArticuloPersonalizadoArgs<ExtArgs>>): Prisma__TipoArticuloPersonalizadoClient<$Result.GetResult<Prisma.$TipoArticuloPersonalizadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticuloSolicitud model
   */ 
  interface ArticuloSolicitudFieldRefs {
    readonly id: FieldRef<"ArticuloSolicitud", 'Int'>
    readonly solicitudId: FieldRef<"ArticuloSolicitud", 'Int'>
    readonly tipoArticuloId: FieldRef<"ArticuloSolicitud", 'Int'>
    readonly tipoArticuloPersonalizadoId: FieldRef<"ArticuloSolicitud", 'Int'>
    readonly cantidad: FieldRef<"ArticuloSolicitud", 'Int'>
    readonly creadoEn: FieldRef<"ArticuloSolicitud", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticuloSolicitud findUnique
   */
  export type ArticuloSolicitudFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloSolicitud to fetch.
     */
    where: ArticuloSolicitudWhereUniqueInput
  }

  /**
   * ArticuloSolicitud findUniqueOrThrow
   */
  export type ArticuloSolicitudFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloSolicitud to fetch.
     */
    where: ArticuloSolicitudWhereUniqueInput
  }

  /**
   * ArticuloSolicitud findFirst
   */
  export type ArticuloSolicitudFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloSolicitud to fetch.
     */
    where?: ArticuloSolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloSolicituds to fetch.
     */
    orderBy?: ArticuloSolicitudOrderByWithRelationInput | ArticuloSolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticuloSolicituds.
     */
    cursor?: ArticuloSolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloSolicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloSolicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticuloSolicituds.
     */
    distinct?: ArticuloSolicitudScalarFieldEnum | ArticuloSolicitudScalarFieldEnum[]
  }

  /**
   * ArticuloSolicitud findFirstOrThrow
   */
  export type ArticuloSolicitudFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloSolicitud to fetch.
     */
    where?: ArticuloSolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloSolicituds to fetch.
     */
    orderBy?: ArticuloSolicitudOrderByWithRelationInput | ArticuloSolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticuloSolicituds.
     */
    cursor?: ArticuloSolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloSolicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloSolicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticuloSolicituds.
     */
    distinct?: ArticuloSolicitudScalarFieldEnum | ArticuloSolicitudScalarFieldEnum[]
  }

  /**
   * ArticuloSolicitud findMany
   */
  export type ArticuloSolicitudFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloSolicituds to fetch.
     */
    where?: ArticuloSolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloSolicituds to fetch.
     */
    orderBy?: ArticuloSolicitudOrderByWithRelationInput | ArticuloSolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticuloSolicituds.
     */
    cursor?: ArticuloSolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloSolicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloSolicituds.
     */
    skip?: number
    distinct?: ArticuloSolicitudScalarFieldEnum | ArticuloSolicitudScalarFieldEnum[]
  }

  /**
   * ArticuloSolicitud create
   */
  export type ArticuloSolicitudCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticuloSolicitud.
     */
    data: XOR<ArticuloSolicitudCreateInput, ArticuloSolicitudUncheckedCreateInput>
  }

  /**
   * ArticuloSolicitud createMany
   */
  export type ArticuloSolicitudCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticuloSolicituds.
     */
    data: ArticuloSolicitudCreateManyInput | ArticuloSolicitudCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticuloSolicitud createManyAndReturn
   */
  export type ArticuloSolicitudCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * The data used to create many ArticuloSolicituds.
     */
    data: ArticuloSolicitudCreateManyInput | ArticuloSolicitudCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticuloSolicitud update
   */
  export type ArticuloSolicitudUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticuloSolicitud.
     */
    data: XOR<ArticuloSolicitudUpdateInput, ArticuloSolicitudUncheckedUpdateInput>
    /**
     * Choose, which ArticuloSolicitud to update.
     */
    where: ArticuloSolicitudWhereUniqueInput
  }

  /**
   * ArticuloSolicitud updateMany
   */
  export type ArticuloSolicitudUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticuloSolicituds.
     */
    data: XOR<ArticuloSolicitudUpdateManyMutationInput, ArticuloSolicitudUncheckedUpdateManyInput>
    /**
     * Filter which ArticuloSolicituds to update
     */
    where?: ArticuloSolicitudWhereInput
    /**
     * Limit how many ArticuloSolicituds to update.
     */
    limit?: number
  }

  /**
   * ArticuloSolicitud updateManyAndReturn
   */
  export type ArticuloSolicitudUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * The data used to update ArticuloSolicituds.
     */
    data: XOR<ArticuloSolicitudUpdateManyMutationInput, ArticuloSolicitudUncheckedUpdateManyInput>
    /**
     * Filter which ArticuloSolicituds to update
     */
    where?: ArticuloSolicitudWhereInput
    /**
     * Limit how many ArticuloSolicituds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticuloSolicitud upsert
   */
  export type ArticuloSolicitudUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticuloSolicitud to update in case it exists.
     */
    where: ArticuloSolicitudWhereUniqueInput
    /**
     * In case the ArticuloSolicitud found by the `where` argument doesn't exist, create a new ArticuloSolicitud with this data.
     */
    create: XOR<ArticuloSolicitudCreateInput, ArticuloSolicitudUncheckedCreateInput>
    /**
     * In case the ArticuloSolicitud was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticuloSolicitudUpdateInput, ArticuloSolicitudUncheckedUpdateInput>
  }

  /**
   * ArticuloSolicitud delete
   */
  export type ArticuloSolicitudDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * Filter which ArticuloSolicitud to delete.
     */
    where: ArticuloSolicitudWhereUniqueInput
  }

  /**
   * ArticuloSolicitud deleteMany
   */
  export type ArticuloSolicitudDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticuloSolicituds to delete
     */
    where?: ArticuloSolicitudWhereInput
    /**
     * Limit how many ArticuloSolicituds to delete.
     */
    limit?: number
  }

  /**
   * ArticuloSolicitud.tipoArticulo
   */
  export type ArticuloSolicitud$tipoArticuloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    where?: TipoArticuloWhereInput
  }

  /**
   * ArticuloSolicitud.tipoArticuloPersonalizado
   */
  export type ArticuloSolicitud$tipoArticuloPersonalizadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloPersonalizado
     */
    select?: TipoArticuloPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticuloPersonalizado
     */
    omit?: TipoArticuloPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloPersonalizadoInclude<ExtArgs> | null
    where?: TipoArticuloPersonalizadoWhereInput
  }

  /**
   * ArticuloSolicitud without action
   */
  export type ArticuloSolicitudDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
  }


  /**
   * Model PeticionDonacion
   */

  export type AggregatePeticionDonacion = {
    _count: PeticionDonacionCountAggregateOutputType | null
    _avg: PeticionDonacionAvgAggregateOutputType | null
    _sum: PeticionDonacionSumAggregateOutputType | null
    _min: PeticionDonacionMinAggregateOutputType | null
    _max: PeticionDonacionMaxAggregateOutputType | null
  }

  export type PeticionDonacionAvgAggregateOutputType = {
    id: number | null
    latitud: number | null
    longitud: number | null
  }

  export type PeticionDonacionSumAggregateOutputType = {
    id: number | null
    latitud: number | null
    longitud: number | null
  }

  export type PeticionDonacionMinAggregateOutputType = {
    id: number | null
    direccion: string | null
    contactoNombre: string | null
    contactoTel: string | null
    latitud: number | null
    longitud: number | null
    descripcion: string | null
    estado: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type PeticionDonacionMaxAggregateOutputType = {
    id: number | null
    direccion: string | null
    contactoNombre: string | null
    contactoTel: string | null
    latitud: number | null
    longitud: number | null
    descripcion: string | null
    estado: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type PeticionDonacionCountAggregateOutputType = {
    id: number
    direccion: number
    contactoNombre: number
    contactoTel: number
    latitud: number
    longitud: number
    descripcion: number
    estado: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type PeticionDonacionAvgAggregateInputType = {
    id?: true
    latitud?: true
    longitud?: true
  }

  export type PeticionDonacionSumAggregateInputType = {
    id?: true
    latitud?: true
    longitud?: true
  }

  export type PeticionDonacionMinAggregateInputType = {
    id?: true
    direccion?: true
    contactoNombre?: true
    contactoTel?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type PeticionDonacionMaxAggregateInputType = {
    id?: true
    direccion?: true
    contactoNombre?: true
    contactoTel?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type PeticionDonacionCountAggregateInputType = {
    id?: true
    direccion?: true
    contactoNombre?: true
    contactoTel?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type PeticionDonacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeticionDonacion to aggregate.
     */
    where?: PeticionDonacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeticionDonacions to fetch.
     */
    orderBy?: PeticionDonacionOrderByWithRelationInput | PeticionDonacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeticionDonacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeticionDonacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeticionDonacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PeticionDonacions
    **/
    _count?: true | PeticionDonacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeticionDonacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeticionDonacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeticionDonacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeticionDonacionMaxAggregateInputType
  }

  export type GetPeticionDonacionAggregateType<T extends PeticionDonacionAggregateArgs> = {
        [P in keyof T & keyof AggregatePeticionDonacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeticionDonacion[P]>
      : GetScalarType<T[P], AggregatePeticionDonacion[P]>
  }




  export type PeticionDonacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeticionDonacionWhereInput
    orderBy?: PeticionDonacionOrderByWithAggregationInput | PeticionDonacionOrderByWithAggregationInput[]
    by: PeticionDonacionScalarFieldEnum[] | PeticionDonacionScalarFieldEnum
    having?: PeticionDonacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeticionDonacionCountAggregateInputType | true
    _avg?: PeticionDonacionAvgAggregateInputType
    _sum?: PeticionDonacionSumAggregateInputType
    _min?: PeticionDonacionMinAggregateInputType
    _max?: PeticionDonacionMaxAggregateInputType
  }

  export type PeticionDonacionGroupByOutputType = {
    id: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    latitud: number | null
    longitud: number | null
    descripcion: string | null
    estado: string
    creadoEn: Date
    actualizadoEn: Date
    _count: PeticionDonacionCountAggregateOutputType | null
    _avg: PeticionDonacionAvgAggregateOutputType | null
    _sum: PeticionDonacionSumAggregateOutputType | null
    _min: PeticionDonacionMinAggregateOutputType | null
    _max: PeticionDonacionMaxAggregateOutputType | null
  }

  type GetPeticionDonacionGroupByPayload<T extends PeticionDonacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeticionDonacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeticionDonacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeticionDonacionGroupByOutputType[P]>
            : GetScalarType<T[P], PeticionDonacionGroupByOutputType[P]>
        }
      >
    >


  export type PeticionDonacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    articulos?: boolean | PeticionDonacion$articulosArgs<ExtArgs>
    _count?: boolean | PeticionDonacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peticionDonacion"]>

  export type PeticionDonacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["peticionDonacion"]>

  export type PeticionDonacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["peticionDonacion"]>

  export type PeticionDonacionSelectScalar = {
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type PeticionDonacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "direccion" | "contactoNombre" | "contactoTel" | "latitud" | "longitud" | "descripcion" | "estado" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["peticionDonacion"]>
  export type PeticionDonacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulos?: boolean | PeticionDonacion$articulosArgs<ExtArgs>
    _count?: boolean | PeticionDonacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeticionDonacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PeticionDonacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PeticionDonacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PeticionDonacion"
    objects: {
      articulos: Prisma.$ArticuloPeticionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      direccion: string
      contactoNombre: string
      contactoTel: string
      latitud: number | null
      longitud: number | null
      descripcion: string | null
      estado: string
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["peticionDonacion"]>
    composites: {}
  }

  type PeticionDonacionGetPayload<S extends boolean | null | undefined | PeticionDonacionDefaultArgs> = $Result.GetResult<Prisma.$PeticionDonacionPayload, S>

  type PeticionDonacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeticionDonacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeticionDonacionCountAggregateInputType | true
    }

  export interface PeticionDonacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PeticionDonacion'], meta: { name: 'PeticionDonacion' } }
    /**
     * Find zero or one PeticionDonacion that matches the filter.
     * @param {PeticionDonacionFindUniqueArgs} args - Arguments to find a PeticionDonacion
     * @example
     * // Get one PeticionDonacion
     * const peticionDonacion = await prisma.peticionDonacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeticionDonacionFindUniqueArgs>(args: SelectSubset<T, PeticionDonacionFindUniqueArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PeticionDonacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeticionDonacionFindUniqueOrThrowArgs} args - Arguments to find a PeticionDonacion
     * @example
     * // Get one PeticionDonacion
     * const peticionDonacion = await prisma.peticionDonacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeticionDonacionFindUniqueOrThrowArgs>(args: SelectSubset<T, PeticionDonacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeticionDonacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeticionDonacionFindFirstArgs} args - Arguments to find a PeticionDonacion
     * @example
     * // Get one PeticionDonacion
     * const peticionDonacion = await prisma.peticionDonacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeticionDonacionFindFirstArgs>(args?: SelectSubset<T, PeticionDonacionFindFirstArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeticionDonacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeticionDonacionFindFirstOrThrowArgs} args - Arguments to find a PeticionDonacion
     * @example
     * // Get one PeticionDonacion
     * const peticionDonacion = await prisma.peticionDonacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeticionDonacionFindFirstOrThrowArgs>(args?: SelectSubset<T, PeticionDonacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PeticionDonacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeticionDonacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PeticionDonacions
     * const peticionDonacions = await prisma.peticionDonacion.findMany()
     * 
     * // Get first 10 PeticionDonacions
     * const peticionDonacions = await prisma.peticionDonacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peticionDonacionWithIdOnly = await prisma.peticionDonacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeticionDonacionFindManyArgs>(args?: SelectSubset<T, PeticionDonacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PeticionDonacion.
     * @param {PeticionDonacionCreateArgs} args - Arguments to create a PeticionDonacion.
     * @example
     * // Create one PeticionDonacion
     * const PeticionDonacion = await prisma.peticionDonacion.create({
     *   data: {
     *     // ... data to create a PeticionDonacion
     *   }
     * })
     * 
     */
    create<T extends PeticionDonacionCreateArgs>(args: SelectSubset<T, PeticionDonacionCreateArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PeticionDonacions.
     * @param {PeticionDonacionCreateManyArgs} args - Arguments to create many PeticionDonacions.
     * @example
     * // Create many PeticionDonacions
     * const peticionDonacion = await prisma.peticionDonacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeticionDonacionCreateManyArgs>(args?: SelectSubset<T, PeticionDonacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PeticionDonacions and returns the data saved in the database.
     * @param {PeticionDonacionCreateManyAndReturnArgs} args - Arguments to create many PeticionDonacions.
     * @example
     * // Create many PeticionDonacions
     * const peticionDonacion = await prisma.peticionDonacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PeticionDonacions and only return the `id`
     * const peticionDonacionWithIdOnly = await prisma.peticionDonacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeticionDonacionCreateManyAndReturnArgs>(args?: SelectSubset<T, PeticionDonacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PeticionDonacion.
     * @param {PeticionDonacionDeleteArgs} args - Arguments to delete one PeticionDonacion.
     * @example
     * // Delete one PeticionDonacion
     * const PeticionDonacion = await prisma.peticionDonacion.delete({
     *   where: {
     *     // ... filter to delete one PeticionDonacion
     *   }
     * })
     * 
     */
    delete<T extends PeticionDonacionDeleteArgs>(args: SelectSubset<T, PeticionDonacionDeleteArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PeticionDonacion.
     * @param {PeticionDonacionUpdateArgs} args - Arguments to update one PeticionDonacion.
     * @example
     * // Update one PeticionDonacion
     * const peticionDonacion = await prisma.peticionDonacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeticionDonacionUpdateArgs>(args: SelectSubset<T, PeticionDonacionUpdateArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PeticionDonacions.
     * @param {PeticionDonacionDeleteManyArgs} args - Arguments to filter PeticionDonacions to delete.
     * @example
     * // Delete a few PeticionDonacions
     * const { count } = await prisma.peticionDonacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeticionDonacionDeleteManyArgs>(args?: SelectSubset<T, PeticionDonacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeticionDonacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeticionDonacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PeticionDonacions
     * const peticionDonacion = await prisma.peticionDonacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeticionDonacionUpdateManyArgs>(args: SelectSubset<T, PeticionDonacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeticionDonacions and returns the data updated in the database.
     * @param {PeticionDonacionUpdateManyAndReturnArgs} args - Arguments to update many PeticionDonacions.
     * @example
     * // Update many PeticionDonacions
     * const peticionDonacion = await prisma.peticionDonacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PeticionDonacions and only return the `id`
     * const peticionDonacionWithIdOnly = await prisma.peticionDonacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PeticionDonacionUpdateManyAndReturnArgs>(args: SelectSubset<T, PeticionDonacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PeticionDonacion.
     * @param {PeticionDonacionUpsertArgs} args - Arguments to update or create a PeticionDonacion.
     * @example
     * // Update or create a PeticionDonacion
     * const peticionDonacion = await prisma.peticionDonacion.upsert({
     *   create: {
     *     // ... data to create a PeticionDonacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PeticionDonacion we want to update
     *   }
     * })
     */
    upsert<T extends PeticionDonacionUpsertArgs>(args: SelectSubset<T, PeticionDonacionUpsertArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PeticionDonacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeticionDonacionCountArgs} args - Arguments to filter PeticionDonacions to count.
     * @example
     * // Count the number of PeticionDonacions
     * const count = await prisma.peticionDonacion.count({
     *   where: {
     *     // ... the filter for the PeticionDonacions we want to count
     *   }
     * })
    **/
    count<T extends PeticionDonacionCountArgs>(
      args?: Subset<T, PeticionDonacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeticionDonacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PeticionDonacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeticionDonacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeticionDonacionAggregateArgs>(args: Subset<T, PeticionDonacionAggregateArgs>): Prisma.PrismaPromise<GetPeticionDonacionAggregateType<T>>

    /**
     * Group by PeticionDonacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeticionDonacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeticionDonacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeticionDonacionGroupByArgs['orderBy'] }
        : { orderBy?: PeticionDonacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeticionDonacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeticionDonacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PeticionDonacion model
   */
  readonly fields: PeticionDonacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PeticionDonacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeticionDonacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articulos<T extends PeticionDonacion$articulosArgs<ExtArgs> = {}>(args?: Subset<T, PeticionDonacion$articulosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PeticionDonacion model
   */ 
  interface PeticionDonacionFieldRefs {
    readonly id: FieldRef<"PeticionDonacion", 'Int'>
    readonly direccion: FieldRef<"PeticionDonacion", 'String'>
    readonly contactoNombre: FieldRef<"PeticionDonacion", 'String'>
    readonly contactoTel: FieldRef<"PeticionDonacion", 'String'>
    readonly latitud: FieldRef<"PeticionDonacion", 'Float'>
    readonly longitud: FieldRef<"PeticionDonacion", 'Float'>
    readonly descripcion: FieldRef<"PeticionDonacion", 'String'>
    readonly estado: FieldRef<"PeticionDonacion", 'String'>
    readonly creadoEn: FieldRef<"PeticionDonacion", 'DateTime'>
    readonly actualizadoEn: FieldRef<"PeticionDonacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PeticionDonacion findUnique
   */
  export type PeticionDonacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * Filter, which PeticionDonacion to fetch.
     */
    where: PeticionDonacionWhereUniqueInput
  }

  /**
   * PeticionDonacion findUniqueOrThrow
   */
  export type PeticionDonacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * Filter, which PeticionDonacion to fetch.
     */
    where: PeticionDonacionWhereUniqueInput
  }

  /**
   * PeticionDonacion findFirst
   */
  export type PeticionDonacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * Filter, which PeticionDonacion to fetch.
     */
    where?: PeticionDonacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeticionDonacions to fetch.
     */
    orderBy?: PeticionDonacionOrderByWithRelationInput | PeticionDonacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeticionDonacions.
     */
    cursor?: PeticionDonacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeticionDonacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeticionDonacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeticionDonacions.
     */
    distinct?: PeticionDonacionScalarFieldEnum | PeticionDonacionScalarFieldEnum[]
  }

  /**
   * PeticionDonacion findFirstOrThrow
   */
  export type PeticionDonacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * Filter, which PeticionDonacion to fetch.
     */
    where?: PeticionDonacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeticionDonacions to fetch.
     */
    orderBy?: PeticionDonacionOrderByWithRelationInput | PeticionDonacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeticionDonacions.
     */
    cursor?: PeticionDonacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeticionDonacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeticionDonacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeticionDonacions.
     */
    distinct?: PeticionDonacionScalarFieldEnum | PeticionDonacionScalarFieldEnum[]
  }

  /**
   * PeticionDonacion findMany
   */
  export type PeticionDonacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * Filter, which PeticionDonacions to fetch.
     */
    where?: PeticionDonacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeticionDonacions to fetch.
     */
    orderBy?: PeticionDonacionOrderByWithRelationInput | PeticionDonacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PeticionDonacions.
     */
    cursor?: PeticionDonacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeticionDonacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeticionDonacions.
     */
    skip?: number
    distinct?: PeticionDonacionScalarFieldEnum | PeticionDonacionScalarFieldEnum[]
  }

  /**
   * PeticionDonacion create
   */
  export type PeticionDonacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * The data needed to create a PeticionDonacion.
     */
    data: XOR<PeticionDonacionCreateInput, PeticionDonacionUncheckedCreateInput>
  }

  /**
   * PeticionDonacion createMany
   */
  export type PeticionDonacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PeticionDonacions.
     */
    data: PeticionDonacionCreateManyInput | PeticionDonacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PeticionDonacion createManyAndReturn
   */
  export type PeticionDonacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * The data used to create many PeticionDonacions.
     */
    data: PeticionDonacionCreateManyInput | PeticionDonacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PeticionDonacion update
   */
  export type PeticionDonacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * The data needed to update a PeticionDonacion.
     */
    data: XOR<PeticionDonacionUpdateInput, PeticionDonacionUncheckedUpdateInput>
    /**
     * Choose, which PeticionDonacion to update.
     */
    where: PeticionDonacionWhereUniqueInput
  }

  /**
   * PeticionDonacion updateMany
   */
  export type PeticionDonacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PeticionDonacions.
     */
    data: XOR<PeticionDonacionUpdateManyMutationInput, PeticionDonacionUncheckedUpdateManyInput>
    /**
     * Filter which PeticionDonacions to update
     */
    where?: PeticionDonacionWhereInput
    /**
     * Limit how many PeticionDonacions to update.
     */
    limit?: number
  }

  /**
   * PeticionDonacion updateManyAndReturn
   */
  export type PeticionDonacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * The data used to update PeticionDonacions.
     */
    data: XOR<PeticionDonacionUpdateManyMutationInput, PeticionDonacionUncheckedUpdateManyInput>
    /**
     * Filter which PeticionDonacions to update
     */
    where?: PeticionDonacionWhereInput
    /**
     * Limit how many PeticionDonacions to update.
     */
    limit?: number
  }

  /**
   * PeticionDonacion upsert
   */
  export type PeticionDonacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * The filter to search for the PeticionDonacion to update in case it exists.
     */
    where: PeticionDonacionWhereUniqueInput
    /**
     * In case the PeticionDonacion found by the `where` argument doesn't exist, create a new PeticionDonacion with this data.
     */
    create: XOR<PeticionDonacionCreateInput, PeticionDonacionUncheckedCreateInput>
    /**
     * In case the PeticionDonacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeticionDonacionUpdateInput, PeticionDonacionUncheckedUpdateInput>
  }

  /**
   * PeticionDonacion delete
   */
  export type PeticionDonacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * Filter which PeticionDonacion to delete.
     */
    where: PeticionDonacionWhereUniqueInput
  }

  /**
   * PeticionDonacion deleteMany
   */
  export type PeticionDonacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeticionDonacions to delete
     */
    where?: PeticionDonacionWhereInput
    /**
     * Limit how many PeticionDonacions to delete.
     */
    limit?: number
  }

  /**
   * PeticionDonacion.articulos
   */
  export type PeticionDonacion$articulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    where?: ArticuloPeticionWhereInput
    orderBy?: ArticuloPeticionOrderByWithRelationInput | ArticuloPeticionOrderByWithRelationInput[]
    cursor?: ArticuloPeticionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticuloPeticionScalarFieldEnum | ArticuloPeticionScalarFieldEnum[]
  }

  /**
   * PeticionDonacion without action
   */
  export type PeticionDonacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
  }


  /**
   * Model ArticuloPeticion
   */

  export type AggregateArticuloPeticion = {
    _count: ArticuloPeticionCountAggregateOutputType | null
    _avg: ArticuloPeticionAvgAggregateOutputType | null
    _sum: ArticuloPeticionSumAggregateOutputType | null
    _min: ArticuloPeticionMinAggregateOutputType | null
    _max: ArticuloPeticionMaxAggregateOutputType | null
  }

  export type ArticuloPeticionAvgAggregateOutputType = {
    id: number | null
    peticionDonacionId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
  }

  export type ArticuloPeticionSumAggregateOutputType = {
    id: number | null
    peticionDonacionId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
  }

  export type ArticuloPeticionMinAggregateOutputType = {
    id: number | null
    peticionDonacionId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
    creadoEn: Date | null
  }

  export type ArticuloPeticionMaxAggregateOutputType = {
    id: number | null
    peticionDonacionId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
    creadoEn: Date | null
  }

  export type ArticuloPeticionCountAggregateOutputType = {
    id: number
    peticionDonacionId: number
    tipoArticuloId: number
    cantidad: number
    creadoEn: number
    _all: number
  }


  export type ArticuloPeticionAvgAggregateInputType = {
    id?: true
    peticionDonacionId?: true
    tipoArticuloId?: true
    cantidad?: true
  }

  export type ArticuloPeticionSumAggregateInputType = {
    id?: true
    peticionDonacionId?: true
    tipoArticuloId?: true
    cantidad?: true
  }

  export type ArticuloPeticionMinAggregateInputType = {
    id?: true
    peticionDonacionId?: true
    tipoArticuloId?: true
    cantidad?: true
    creadoEn?: true
  }

  export type ArticuloPeticionMaxAggregateInputType = {
    id?: true
    peticionDonacionId?: true
    tipoArticuloId?: true
    cantidad?: true
    creadoEn?: true
  }

  export type ArticuloPeticionCountAggregateInputType = {
    id?: true
    peticionDonacionId?: true
    tipoArticuloId?: true
    cantidad?: true
    creadoEn?: true
    _all?: true
  }

  export type ArticuloPeticionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticuloPeticion to aggregate.
     */
    where?: ArticuloPeticionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloPeticions to fetch.
     */
    orderBy?: ArticuloPeticionOrderByWithRelationInput | ArticuloPeticionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticuloPeticionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloPeticions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloPeticions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticuloPeticions
    **/
    _count?: true | ArticuloPeticionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticuloPeticionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticuloPeticionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticuloPeticionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticuloPeticionMaxAggregateInputType
  }

  export type GetArticuloPeticionAggregateType<T extends ArticuloPeticionAggregateArgs> = {
        [P in keyof T & keyof AggregateArticuloPeticion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticuloPeticion[P]>
      : GetScalarType<T[P], AggregateArticuloPeticion[P]>
  }




  export type ArticuloPeticionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloPeticionWhereInput
    orderBy?: ArticuloPeticionOrderByWithAggregationInput | ArticuloPeticionOrderByWithAggregationInput[]
    by: ArticuloPeticionScalarFieldEnum[] | ArticuloPeticionScalarFieldEnum
    having?: ArticuloPeticionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticuloPeticionCountAggregateInputType | true
    _avg?: ArticuloPeticionAvgAggregateInputType
    _sum?: ArticuloPeticionSumAggregateInputType
    _min?: ArticuloPeticionMinAggregateInputType
    _max?: ArticuloPeticionMaxAggregateInputType
  }

  export type ArticuloPeticionGroupByOutputType = {
    id: number
    peticionDonacionId: number
    tipoArticuloId: number
    cantidad: number
    creadoEn: Date
    _count: ArticuloPeticionCountAggregateOutputType | null
    _avg: ArticuloPeticionAvgAggregateOutputType | null
    _sum: ArticuloPeticionSumAggregateOutputType | null
    _min: ArticuloPeticionMinAggregateOutputType | null
    _max: ArticuloPeticionMaxAggregateOutputType | null
  }

  type GetArticuloPeticionGroupByPayload<T extends ArticuloPeticionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticuloPeticionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticuloPeticionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticuloPeticionGroupByOutputType[P]>
            : GetScalarType<T[P], ArticuloPeticionGroupByOutputType[P]>
        }
      >
    >


  export type ArticuloPeticionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peticionDonacionId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    creadoEn?: boolean
    peticionDonacion?: boolean | PeticionDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloPeticion"]>

  export type ArticuloPeticionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peticionDonacionId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    creadoEn?: boolean
    peticionDonacion?: boolean | PeticionDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloPeticion"]>

  export type ArticuloPeticionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peticionDonacionId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    creadoEn?: boolean
    peticionDonacion?: boolean | PeticionDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloPeticion"]>

  export type ArticuloPeticionSelectScalar = {
    id?: boolean
    peticionDonacionId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    creadoEn?: boolean
  }

  export type ArticuloPeticionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "peticionDonacionId" | "tipoArticuloId" | "cantidad" | "creadoEn", ExtArgs["result"]["articuloPeticion"]>
  export type ArticuloPeticionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peticionDonacion?: boolean | PeticionDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }
  export type ArticuloPeticionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peticionDonacion?: boolean | PeticionDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }
  export type ArticuloPeticionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peticionDonacion?: boolean | PeticionDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }

  export type $ArticuloPeticionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticuloPeticion"
    objects: {
      peticionDonacion: Prisma.$PeticionDonacionPayload<ExtArgs>
      tipoArticulo: Prisma.$TipoArticuloPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      peticionDonacionId: number
      tipoArticuloId: number
      cantidad: number
      creadoEn: Date
    }, ExtArgs["result"]["articuloPeticion"]>
    composites: {}
  }

  type ArticuloPeticionGetPayload<S extends boolean | null | undefined | ArticuloPeticionDefaultArgs> = $Result.GetResult<Prisma.$ArticuloPeticionPayload, S>

  type ArticuloPeticionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticuloPeticionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticuloPeticionCountAggregateInputType | true
    }

  export interface ArticuloPeticionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticuloPeticion'], meta: { name: 'ArticuloPeticion' } }
    /**
     * Find zero or one ArticuloPeticion that matches the filter.
     * @param {ArticuloPeticionFindUniqueArgs} args - Arguments to find a ArticuloPeticion
     * @example
     * // Get one ArticuloPeticion
     * const articuloPeticion = await prisma.articuloPeticion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticuloPeticionFindUniqueArgs>(args: SelectSubset<T, ArticuloPeticionFindUniqueArgs<ExtArgs>>): Prisma__ArticuloPeticionClient<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticuloPeticion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticuloPeticionFindUniqueOrThrowArgs} args - Arguments to find a ArticuloPeticion
     * @example
     * // Get one ArticuloPeticion
     * const articuloPeticion = await prisma.articuloPeticion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticuloPeticionFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticuloPeticionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticuloPeticionClient<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticuloPeticion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloPeticionFindFirstArgs} args - Arguments to find a ArticuloPeticion
     * @example
     * // Get one ArticuloPeticion
     * const articuloPeticion = await prisma.articuloPeticion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticuloPeticionFindFirstArgs>(args?: SelectSubset<T, ArticuloPeticionFindFirstArgs<ExtArgs>>): Prisma__ArticuloPeticionClient<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticuloPeticion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloPeticionFindFirstOrThrowArgs} args - Arguments to find a ArticuloPeticion
     * @example
     * // Get one ArticuloPeticion
     * const articuloPeticion = await prisma.articuloPeticion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticuloPeticionFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticuloPeticionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticuloPeticionClient<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticuloPeticions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloPeticionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticuloPeticions
     * const articuloPeticions = await prisma.articuloPeticion.findMany()
     * 
     * // Get first 10 ArticuloPeticions
     * const articuloPeticions = await prisma.articuloPeticion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articuloPeticionWithIdOnly = await prisma.articuloPeticion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticuloPeticionFindManyArgs>(args?: SelectSubset<T, ArticuloPeticionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticuloPeticion.
     * @param {ArticuloPeticionCreateArgs} args - Arguments to create a ArticuloPeticion.
     * @example
     * // Create one ArticuloPeticion
     * const ArticuloPeticion = await prisma.articuloPeticion.create({
     *   data: {
     *     // ... data to create a ArticuloPeticion
     *   }
     * })
     * 
     */
    create<T extends ArticuloPeticionCreateArgs>(args: SelectSubset<T, ArticuloPeticionCreateArgs<ExtArgs>>): Prisma__ArticuloPeticionClient<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticuloPeticions.
     * @param {ArticuloPeticionCreateManyArgs} args - Arguments to create many ArticuloPeticions.
     * @example
     * // Create many ArticuloPeticions
     * const articuloPeticion = await prisma.articuloPeticion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticuloPeticionCreateManyArgs>(args?: SelectSubset<T, ArticuloPeticionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticuloPeticions and returns the data saved in the database.
     * @param {ArticuloPeticionCreateManyAndReturnArgs} args - Arguments to create many ArticuloPeticions.
     * @example
     * // Create many ArticuloPeticions
     * const articuloPeticion = await prisma.articuloPeticion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticuloPeticions and only return the `id`
     * const articuloPeticionWithIdOnly = await prisma.articuloPeticion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticuloPeticionCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticuloPeticionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticuloPeticion.
     * @param {ArticuloPeticionDeleteArgs} args - Arguments to delete one ArticuloPeticion.
     * @example
     * // Delete one ArticuloPeticion
     * const ArticuloPeticion = await prisma.articuloPeticion.delete({
     *   where: {
     *     // ... filter to delete one ArticuloPeticion
     *   }
     * })
     * 
     */
    delete<T extends ArticuloPeticionDeleteArgs>(args: SelectSubset<T, ArticuloPeticionDeleteArgs<ExtArgs>>): Prisma__ArticuloPeticionClient<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticuloPeticion.
     * @param {ArticuloPeticionUpdateArgs} args - Arguments to update one ArticuloPeticion.
     * @example
     * // Update one ArticuloPeticion
     * const articuloPeticion = await prisma.articuloPeticion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticuloPeticionUpdateArgs>(args: SelectSubset<T, ArticuloPeticionUpdateArgs<ExtArgs>>): Prisma__ArticuloPeticionClient<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticuloPeticions.
     * @param {ArticuloPeticionDeleteManyArgs} args - Arguments to filter ArticuloPeticions to delete.
     * @example
     * // Delete a few ArticuloPeticions
     * const { count } = await prisma.articuloPeticion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticuloPeticionDeleteManyArgs>(args?: SelectSubset<T, ArticuloPeticionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticuloPeticions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloPeticionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticuloPeticions
     * const articuloPeticion = await prisma.articuloPeticion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticuloPeticionUpdateManyArgs>(args: SelectSubset<T, ArticuloPeticionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticuloPeticions and returns the data updated in the database.
     * @param {ArticuloPeticionUpdateManyAndReturnArgs} args - Arguments to update many ArticuloPeticions.
     * @example
     * // Update many ArticuloPeticions
     * const articuloPeticion = await prisma.articuloPeticion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticuloPeticions and only return the `id`
     * const articuloPeticionWithIdOnly = await prisma.articuloPeticion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticuloPeticionUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticuloPeticionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticuloPeticion.
     * @param {ArticuloPeticionUpsertArgs} args - Arguments to update or create a ArticuloPeticion.
     * @example
     * // Update or create a ArticuloPeticion
     * const articuloPeticion = await prisma.articuloPeticion.upsert({
     *   create: {
     *     // ... data to create a ArticuloPeticion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticuloPeticion we want to update
     *   }
     * })
     */
    upsert<T extends ArticuloPeticionUpsertArgs>(args: SelectSubset<T, ArticuloPeticionUpsertArgs<ExtArgs>>): Prisma__ArticuloPeticionClient<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticuloPeticions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloPeticionCountArgs} args - Arguments to filter ArticuloPeticions to count.
     * @example
     * // Count the number of ArticuloPeticions
     * const count = await prisma.articuloPeticion.count({
     *   where: {
     *     // ... the filter for the ArticuloPeticions we want to count
     *   }
     * })
    **/
    count<T extends ArticuloPeticionCountArgs>(
      args?: Subset<T, ArticuloPeticionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticuloPeticionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticuloPeticion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloPeticionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticuloPeticionAggregateArgs>(args: Subset<T, ArticuloPeticionAggregateArgs>): Prisma.PrismaPromise<GetArticuloPeticionAggregateType<T>>

    /**
     * Group by ArticuloPeticion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloPeticionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticuloPeticionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticuloPeticionGroupByArgs['orderBy'] }
        : { orderBy?: ArticuloPeticionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticuloPeticionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticuloPeticionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticuloPeticion model
   */
  readonly fields: ArticuloPeticionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticuloPeticion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticuloPeticionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peticionDonacion<T extends PeticionDonacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeticionDonacionDefaultArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoArticulo<T extends TipoArticuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoArticuloDefaultArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticuloPeticion model
   */ 
  interface ArticuloPeticionFieldRefs {
    readonly id: FieldRef<"ArticuloPeticion", 'Int'>
    readonly peticionDonacionId: FieldRef<"ArticuloPeticion", 'Int'>
    readonly tipoArticuloId: FieldRef<"ArticuloPeticion", 'Int'>
    readonly cantidad: FieldRef<"ArticuloPeticion", 'Int'>
    readonly creadoEn: FieldRef<"ArticuloPeticion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticuloPeticion findUnique
   */
  export type ArticuloPeticionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloPeticion to fetch.
     */
    where: ArticuloPeticionWhereUniqueInput
  }

  /**
   * ArticuloPeticion findUniqueOrThrow
   */
  export type ArticuloPeticionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloPeticion to fetch.
     */
    where: ArticuloPeticionWhereUniqueInput
  }

  /**
   * ArticuloPeticion findFirst
   */
  export type ArticuloPeticionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloPeticion to fetch.
     */
    where?: ArticuloPeticionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloPeticions to fetch.
     */
    orderBy?: ArticuloPeticionOrderByWithRelationInput | ArticuloPeticionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticuloPeticions.
     */
    cursor?: ArticuloPeticionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloPeticions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloPeticions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticuloPeticions.
     */
    distinct?: ArticuloPeticionScalarFieldEnum | ArticuloPeticionScalarFieldEnum[]
  }

  /**
   * ArticuloPeticion findFirstOrThrow
   */
  export type ArticuloPeticionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloPeticion to fetch.
     */
    where?: ArticuloPeticionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloPeticions to fetch.
     */
    orderBy?: ArticuloPeticionOrderByWithRelationInput | ArticuloPeticionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticuloPeticions.
     */
    cursor?: ArticuloPeticionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloPeticions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloPeticions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticuloPeticions.
     */
    distinct?: ArticuloPeticionScalarFieldEnum | ArticuloPeticionScalarFieldEnum[]
  }

  /**
   * ArticuloPeticion findMany
   */
  export type ArticuloPeticionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloPeticions to fetch.
     */
    where?: ArticuloPeticionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloPeticions to fetch.
     */
    orderBy?: ArticuloPeticionOrderByWithRelationInput | ArticuloPeticionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticuloPeticions.
     */
    cursor?: ArticuloPeticionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloPeticions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloPeticions.
     */
    skip?: number
    distinct?: ArticuloPeticionScalarFieldEnum | ArticuloPeticionScalarFieldEnum[]
  }

  /**
   * ArticuloPeticion create
   */
  export type ArticuloPeticionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticuloPeticion.
     */
    data: XOR<ArticuloPeticionCreateInput, ArticuloPeticionUncheckedCreateInput>
  }

  /**
   * ArticuloPeticion createMany
   */
  export type ArticuloPeticionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticuloPeticions.
     */
    data: ArticuloPeticionCreateManyInput | ArticuloPeticionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticuloPeticion createManyAndReturn
   */
  export type ArticuloPeticionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * The data used to create many ArticuloPeticions.
     */
    data: ArticuloPeticionCreateManyInput | ArticuloPeticionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticuloPeticion update
   */
  export type ArticuloPeticionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticuloPeticion.
     */
    data: XOR<ArticuloPeticionUpdateInput, ArticuloPeticionUncheckedUpdateInput>
    /**
     * Choose, which ArticuloPeticion to update.
     */
    where: ArticuloPeticionWhereUniqueInput
  }

  /**
   * ArticuloPeticion updateMany
   */
  export type ArticuloPeticionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticuloPeticions.
     */
    data: XOR<ArticuloPeticionUpdateManyMutationInput, ArticuloPeticionUncheckedUpdateManyInput>
    /**
     * Filter which ArticuloPeticions to update
     */
    where?: ArticuloPeticionWhereInput
    /**
     * Limit how many ArticuloPeticions to update.
     */
    limit?: number
  }

  /**
   * ArticuloPeticion updateManyAndReturn
   */
  export type ArticuloPeticionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * The data used to update ArticuloPeticions.
     */
    data: XOR<ArticuloPeticionUpdateManyMutationInput, ArticuloPeticionUncheckedUpdateManyInput>
    /**
     * Filter which ArticuloPeticions to update
     */
    where?: ArticuloPeticionWhereInput
    /**
     * Limit how many ArticuloPeticions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticuloPeticion upsert
   */
  export type ArticuloPeticionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticuloPeticion to update in case it exists.
     */
    where: ArticuloPeticionWhereUniqueInput
    /**
     * In case the ArticuloPeticion found by the `where` argument doesn't exist, create a new ArticuloPeticion with this data.
     */
    create: XOR<ArticuloPeticionCreateInput, ArticuloPeticionUncheckedCreateInput>
    /**
     * In case the ArticuloPeticion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticuloPeticionUpdateInput, ArticuloPeticionUncheckedUpdateInput>
  }

  /**
   * ArticuloPeticion delete
   */
  export type ArticuloPeticionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * Filter which ArticuloPeticion to delete.
     */
    where: ArticuloPeticionWhereUniqueInput
  }

  /**
   * ArticuloPeticion deleteMany
   */
  export type ArticuloPeticionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticuloPeticions to delete
     */
    where?: ArticuloPeticionWhereInput
    /**
     * Limit how many ArticuloPeticions to delete.
     */
    limit?: number
  }

  /**
   * ArticuloPeticion without action
   */
  export type ArticuloPeticionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
  }


  /**
   * Model SolicitudLimpieza
   */

  export type AggregateSolicitudLimpieza = {
    _count: SolicitudLimpiezaCountAggregateOutputType | null
    _avg: SolicitudLimpiezaAvgAggregateOutputType | null
    _sum: SolicitudLimpiezaSumAggregateOutputType | null
    _min: SolicitudLimpiezaMinAggregateOutputType | null
    _max: SolicitudLimpiezaMaxAggregateOutputType | null
  }

  export type SolicitudLimpiezaAvgAggregateOutputType = {
    id: number | null
    latitud: number | null
    longitud: number | null
  }

  export type SolicitudLimpiezaSumAggregateOutputType = {
    id: number | null
    latitud: number | null
    longitud: number | null
  }

  export type SolicitudLimpiezaMinAggregateOutputType = {
    id: number | null
    direccion: string | null
    contactoNombre: string | null
    contactoTel: string | null
    estado: string | null
    latitud: number | null
    longitud: number | null
    descripcion: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type SolicitudLimpiezaMaxAggregateOutputType = {
    id: number | null
    direccion: string | null
    contactoNombre: string | null
    contactoTel: string | null
    estado: string | null
    latitud: number | null
    longitud: number | null
    descripcion: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type SolicitudLimpiezaCountAggregateOutputType = {
    id: number
    direccion: number
    contactoNombre: number
    contactoTel: number
    estado: number
    latitud: number
    longitud: number
    descripcion: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type SolicitudLimpiezaAvgAggregateInputType = {
    id?: true
    latitud?: true
    longitud?: true
  }

  export type SolicitudLimpiezaSumAggregateInputType = {
    id?: true
    latitud?: true
    longitud?: true
  }

  export type SolicitudLimpiezaMinAggregateInputType = {
    id?: true
    direccion?: true
    contactoNombre?: true
    contactoTel?: true
    estado?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type SolicitudLimpiezaMaxAggregateInputType = {
    id?: true
    direccion?: true
    contactoNombre?: true
    contactoTel?: true
    estado?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type SolicitudLimpiezaCountAggregateInputType = {
    id?: true
    direccion?: true
    contactoNombre?: true
    contactoTel?: true
    estado?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type SolicitudLimpiezaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolicitudLimpieza to aggregate.
     */
    where?: SolicitudLimpiezaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolicitudLimpiezas to fetch.
     */
    orderBy?: SolicitudLimpiezaOrderByWithRelationInput | SolicitudLimpiezaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolicitudLimpiezaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolicitudLimpiezas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolicitudLimpiezas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SolicitudLimpiezas
    **/
    _count?: true | SolicitudLimpiezaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SolicitudLimpiezaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SolicitudLimpiezaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolicitudLimpiezaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolicitudLimpiezaMaxAggregateInputType
  }

  export type GetSolicitudLimpiezaAggregateType<T extends SolicitudLimpiezaAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitudLimpieza]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitudLimpieza[P]>
      : GetScalarType<T[P], AggregateSolicitudLimpieza[P]>
  }




  export type SolicitudLimpiezaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitudLimpiezaWhereInput
    orderBy?: SolicitudLimpiezaOrderByWithAggregationInput | SolicitudLimpiezaOrderByWithAggregationInput[]
    by: SolicitudLimpiezaScalarFieldEnum[] | SolicitudLimpiezaScalarFieldEnum
    having?: SolicitudLimpiezaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolicitudLimpiezaCountAggregateInputType | true
    _avg?: SolicitudLimpiezaAvgAggregateInputType
    _sum?: SolicitudLimpiezaSumAggregateInputType
    _min?: SolicitudLimpiezaMinAggregateInputType
    _max?: SolicitudLimpiezaMaxAggregateInputType
  }

  export type SolicitudLimpiezaGroupByOutputType = {
    id: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado: string
    latitud: number
    longitud: number
    descripcion: string | null
    creadoEn: Date
    actualizadoEn: Date
    _count: SolicitudLimpiezaCountAggregateOutputType | null
    _avg: SolicitudLimpiezaAvgAggregateOutputType | null
    _sum: SolicitudLimpiezaSumAggregateOutputType | null
    _min: SolicitudLimpiezaMinAggregateOutputType | null
    _max: SolicitudLimpiezaMaxAggregateOutputType | null
  }

  type GetSolicitudLimpiezaGroupByPayload<T extends SolicitudLimpiezaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolicitudLimpiezaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolicitudLimpiezaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolicitudLimpiezaGroupByOutputType[P]>
            : GetScalarType<T[P], SolicitudLimpiezaGroupByOutputType[P]>
        }
      >
    >


  export type SolicitudLimpiezaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["solicitudLimpieza"]>

  export type SolicitudLimpiezaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["solicitudLimpieza"]>

  export type SolicitudLimpiezaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["solicitudLimpieza"]>

  export type SolicitudLimpiezaSelectScalar = {
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type SolicitudLimpiezaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "direccion" | "contactoNombre" | "contactoTel" | "estado" | "latitud" | "longitud" | "descripcion" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["solicitudLimpieza"]>

  export type $SolicitudLimpiezaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SolicitudLimpieza"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      direccion: string
      contactoNombre: string
      contactoTel: string
      estado: string
      latitud: number
      longitud: number
      descripcion: string | null
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["solicitudLimpieza"]>
    composites: {}
  }

  type SolicitudLimpiezaGetPayload<S extends boolean | null | undefined | SolicitudLimpiezaDefaultArgs> = $Result.GetResult<Prisma.$SolicitudLimpiezaPayload, S>

  type SolicitudLimpiezaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolicitudLimpiezaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolicitudLimpiezaCountAggregateInputType | true
    }

  export interface SolicitudLimpiezaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SolicitudLimpieza'], meta: { name: 'SolicitudLimpieza' } }
    /**
     * Find zero or one SolicitudLimpieza that matches the filter.
     * @param {SolicitudLimpiezaFindUniqueArgs} args - Arguments to find a SolicitudLimpieza
     * @example
     * // Get one SolicitudLimpieza
     * const solicitudLimpieza = await prisma.solicitudLimpieza.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolicitudLimpiezaFindUniqueArgs>(args: SelectSubset<T, SolicitudLimpiezaFindUniqueArgs<ExtArgs>>): Prisma__SolicitudLimpiezaClient<$Result.GetResult<Prisma.$SolicitudLimpiezaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SolicitudLimpieza that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolicitudLimpiezaFindUniqueOrThrowArgs} args - Arguments to find a SolicitudLimpieza
     * @example
     * // Get one SolicitudLimpieza
     * const solicitudLimpieza = await prisma.solicitudLimpieza.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolicitudLimpiezaFindUniqueOrThrowArgs>(args: SelectSubset<T, SolicitudLimpiezaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolicitudLimpiezaClient<$Result.GetResult<Prisma.$SolicitudLimpiezaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolicitudLimpieza that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudLimpiezaFindFirstArgs} args - Arguments to find a SolicitudLimpieza
     * @example
     * // Get one SolicitudLimpieza
     * const solicitudLimpieza = await prisma.solicitudLimpieza.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolicitudLimpiezaFindFirstArgs>(args?: SelectSubset<T, SolicitudLimpiezaFindFirstArgs<ExtArgs>>): Prisma__SolicitudLimpiezaClient<$Result.GetResult<Prisma.$SolicitudLimpiezaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolicitudLimpieza that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudLimpiezaFindFirstOrThrowArgs} args - Arguments to find a SolicitudLimpieza
     * @example
     * // Get one SolicitudLimpieza
     * const solicitudLimpieza = await prisma.solicitudLimpieza.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolicitudLimpiezaFindFirstOrThrowArgs>(args?: SelectSubset<T, SolicitudLimpiezaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolicitudLimpiezaClient<$Result.GetResult<Prisma.$SolicitudLimpiezaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SolicitudLimpiezas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudLimpiezaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SolicitudLimpiezas
     * const solicitudLimpiezas = await prisma.solicitudLimpieza.findMany()
     * 
     * // Get first 10 SolicitudLimpiezas
     * const solicitudLimpiezas = await prisma.solicitudLimpieza.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solicitudLimpiezaWithIdOnly = await prisma.solicitudLimpieza.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolicitudLimpiezaFindManyArgs>(args?: SelectSubset<T, SolicitudLimpiezaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudLimpiezaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SolicitudLimpieza.
     * @param {SolicitudLimpiezaCreateArgs} args - Arguments to create a SolicitudLimpieza.
     * @example
     * // Create one SolicitudLimpieza
     * const SolicitudLimpieza = await prisma.solicitudLimpieza.create({
     *   data: {
     *     // ... data to create a SolicitudLimpieza
     *   }
     * })
     * 
     */
    create<T extends SolicitudLimpiezaCreateArgs>(args: SelectSubset<T, SolicitudLimpiezaCreateArgs<ExtArgs>>): Prisma__SolicitudLimpiezaClient<$Result.GetResult<Prisma.$SolicitudLimpiezaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SolicitudLimpiezas.
     * @param {SolicitudLimpiezaCreateManyArgs} args - Arguments to create many SolicitudLimpiezas.
     * @example
     * // Create many SolicitudLimpiezas
     * const solicitudLimpieza = await prisma.solicitudLimpieza.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolicitudLimpiezaCreateManyArgs>(args?: SelectSubset<T, SolicitudLimpiezaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SolicitudLimpiezas and returns the data saved in the database.
     * @param {SolicitudLimpiezaCreateManyAndReturnArgs} args - Arguments to create many SolicitudLimpiezas.
     * @example
     * // Create many SolicitudLimpiezas
     * const solicitudLimpieza = await prisma.solicitudLimpieza.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SolicitudLimpiezas and only return the `id`
     * const solicitudLimpiezaWithIdOnly = await prisma.solicitudLimpieza.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolicitudLimpiezaCreateManyAndReturnArgs>(args?: SelectSubset<T, SolicitudLimpiezaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudLimpiezaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SolicitudLimpieza.
     * @param {SolicitudLimpiezaDeleteArgs} args - Arguments to delete one SolicitudLimpieza.
     * @example
     * // Delete one SolicitudLimpieza
     * const SolicitudLimpieza = await prisma.solicitudLimpieza.delete({
     *   where: {
     *     // ... filter to delete one SolicitudLimpieza
     *   }
     * })
     * 
     */
    delete<T extends SolicitudLimpiezaDeleteArgs>(args: SelectSubset<T, SolicitudLimpiezaDeleteArgs<ExtArgs>>): Prisma__SolicitudLimpiezaClient<$Result.GetResult<Prisma.$SolicitudLimpiezaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SolicitudLimpieza.
     * @param {SolicitudLimpiezaUpdateArgs} args - Arguments to update one SolicitudLimpieza.
     * @example
     * // Update one SolicitudLimpieza
     * const solicitudLimpieza = await prisma.solicitudLimpieza.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolicitudLimpiezaUpdateArgs>(args: SelectSubset<T, SolicitudLimpiezaUpdateArgs<ExtArgs>>): Prisma__SolicitudLimpiezaClient<$Result.GetResult<Prisma.$SolicitudLimpiezaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SolicitudLimpiezas.
     * @param {SolicitudLimpiezaDeleteManyArgs} args - Arguments to filter SolicitudLimpiezas to delete.
     * @example
     * // Delete a few SolicitudLimpiezas
     * const { count } = await prisma.solicitudLimpieza.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolicitudLimpiezaDeleteManyArgs>(args?: SelectSubset<T, SolicitudLimpiezaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolicitudLimpiezas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudLimpiezaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SolicitudLimpiezas
     * const solicitudLimpieza = await prisma.solicitudLimpieza.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolicitudLimpiezaUpdateManyArgs>(args: SelectSubset<T, SolicitudLimpiezaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolicitudLimpiezas and returns the data updated in the database.
     * @param {SolicitudLimpiezaUpdateManyAndReturnArgs} args - Arguments to update many SolicitudLimpiezas.
     * @example
     * // Update many SolicitudLimpiezas
     * const solicitudLimpieza = await prisma.solicitudLimpieza.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SolicitudLimpiezas and only return the `id`
     * const solicitudLimpiezaWithIdOnly = await prisma.solicitudLimpieza.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SolicitudLimpiezaUpdateManyAndReturnArgs>(args: SelectSubset<T, SolicitudLimpiezaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudLimpiezaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SolicitudLimpieza.
     * @param {SolicitudLimpiezaUpsertArgs} args - Arguments to update or create a SolicitudLimpieza.
     * @example
     * // Update or create a SolicitudLimpieza
     * const solicitudLimpieza = await prisma.solicitudLimpieza.upsert({
     *   create: {
     *     // ... data to create a SolicitudLimpieza
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SolicitudLimpieza we want to update
     *   }
     * })
     */
    upsert<T extends SolicitudLimpiezaUpsertArgs>(args: SelectSubset<T, SolicitudLimpiezaUpsertArgs<ExtArgs>>): Prisma__SolicitudLimpiezaClient<$Result.GetResult<Prisma.$SolicitudLimpiezaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SolicitudLimpiezas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudLimpiezaCountArgs} args - Arguments to filter SolicitudLimpiezas to count.
     * @example
     * // Count the number of SolicitudLimpiezas
     * const count = await prisma.solicitudLimpieza.count({
     *   where: {
     *     // ... the filter for the SolicitudLimpiezas we want to count
     *   }
     * })
    **/
    count<T extends SolicitudLimpiezaCountArgs>(
      args?: Subset<T, SolicitudLimpiezaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolicitudLimpiezaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SolicitudLimpieza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudLimpiezaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SolicitudLimpiezaAggregateArgs>(args: Subset<T, SolicitudLimpiezaAggregateArgs>): Prisma.PrismaPromise<GetSolicitudLimpiezaAggregateType<T>>

    /**
     * Group by SolicitudLimpieza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudLimpiezaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SolicitudLimpiezaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolicitudLimpiezaGroupByArgs['orderBy'] }
        : { orderBy?: SolicitudLimpiezaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SolicitudLimpiezaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitudLimpiezaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SolicitudLimpieza model
   */
  readonly fields: SolicitudLimpiezaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SolicitudLimpieza.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolicitudLimpiezaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SolicitudLimpieza model
   */ 
  interface SolicitudLimpiezaFieldRefs {
    readonly id: FieldRef<"SolicitudLimpieza", 'Int'>
    readonly direccion: FieldRef<"SolicitudLimpieza", 'String'>
    readonly contactoNombre: FieldRef<"SolicitudLimpieza", 'String'>
    readonly contactoTel: FieldRef<"SolicitudLimpieza", 'String'>
    readonly estado: FieldRef<"SolicitudLimpieza", 'String'>
    readonly latitud: FieldRef<"SolicitudLimpieza", 'Float'>
    readonly longitud: FieldRef<"SolicitudLimpieza", 'Float'>
    readonly descripcion: FieldRef<"SolicitudLimpieza", 'String'>
    readonly creadoEn: FieldRef<"SolicitudLimpieza", 'DateTime'>
    readonly actualizadoEn: FieldRef<"SolicitudLimpieza", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SolicitudLimpieza findUnique
   */
  export type SolicitudLimpiezaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudLimpieza
     */
    select?: SolicitudLimpiezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudLimpieza
     */
    omit?: SolicitudLimpiezaOmit<ExtArgs> | null
    /**
     * Filter, which SolicitudLimpieza to fetch.
     */
    where: SolicitudLimpiezaWhereUniqueInput
  }

  /**
   * SolicitudLimpieza findUniqueOrThrow
   */
  export type SolicitudLimpiezaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudLimpieza
     */
    select?: SolicitudLimpiezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudLimpieza
     */
    omit?: SolicitudLimpiezaOmit<ExtArgs> | null
    /**
     * Filter, which SolicitudLimpieza to fetch.
     */
    where: SolicitudLimpiezaWhereUniqueInput
  }

  /**
   * SolicitudLimpieza findFirst
   */
  export type SolicitudLimpiezaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudLimpieza
     */
    select?: SolicitudLimpiezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudLimpieza
     */
    omit?: SolicitudLimpiezaOmit<ExtArgs> | null
    /**
     * Filter, which SolicitudLimpieza to fetch.
     */
    where?: SolicitudLimpiezaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolicitudLimpiezas to fetch.
     */
    orderBy?: SolicitudLimpiezaOrderByWithRelationInput | SolicitudLimpiezaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolicitudLimpiezas.
     */
    cursor?: SolicitudLimpiezaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolicitudLimpiezas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolicitudLimpiezas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolicitudLimpiezas.
     */
    distinct?: SolicitudLimpiezaScalarFieldEnum | SolicitudLimpiezaScalarFieldEnum[]
  }

  /**
   * SolicitudLimpieza findFirstOrThrow
   */
  export type SolicitudLimpiezaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudLimpieza
     */
    select?: SolicitudLimpiezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudLimpieza
     */
    omit?: SolicitudLimpiezaOmit<ExtArgs> | null
    /**
     * Filter, which SolicitudLimpieza to fetch.
     */
    where?: SolicitudLimpiezaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolicitudLimpiezas to fetch.
     */
    orderBy?: SolicitudLimpiezaOrderByWithRelationInput | SolicitudLimpiezaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolicitudLimpiezas.
     */
    cursor?: SolicitudLimpiezaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolicitudLimpiezas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolicitudLimpiezas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolicitudLimpiezas.
     */
    distinct?: SolicitudLimpiezaScalarFieldEnum | SolicitudLimpiezaScalarFieldEnum[]
  }

  /**
   * SolicitudLimpieza findMany
   */
  export type SolicitudLimpiezaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudLimpieza
     */
    select?: SolicitudLimpiezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudLimpieza
     */
    omit?: SolicitudLimpiezaOmit<ExtArgs> | null
    /**
     * Filter, which SolicitudLimpiezas to fetch.
     */
    where?: SolicitudLimpiezaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolicitudLimpiezas to fetch.
     */
    orderBy?: SolicitudLimpiezaOrderByWithRelationInput | SolicitudLimpiezaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SolicitudLimpiezas.
     */
    cursor?: SolicitudLimpiezaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolicitudLimpiezas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolicitudLimpiezas.
     */
    skip?: number
    distinct?: SolicitudLimpiezaScalarFieldEnum | SolicitudLimpiezaScalarFieldEnum[]
  }

  /**
   * SolicitudLimpieza create
   */
  export type SolicitudLimpiezaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudLimpieza
     */
    select?: SolicitudLimpiezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudLimpieza
     */
    omit?: SolicitudLimpiezaOmit<ExtArgs> | null
    /**
     * The data needed to create a SolicitudLimpieza.
     */
    data: XOR<SolicitudLimpiezaCreateInput, SolicitudLimpiezaUncheckedCreateInput>
  }

  /**
   * SolicitudLimpieza createMany
   */
  export type SolicitudLimpiezaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SolicitudLimpiezas.
     */
    data: SolicitudLimpiezaCreateManyInput | SolicitudLimpiezaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SolicitudLimpieza createManyAndReturn
   */
  export type SolicitudLimpiezaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudLimpieza
     */
    select?: SolicitudLimpiezaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudLimpieza
     */
    omit?: SolicitudLimpiezaOmit<ExtArgs> | null
    /**
     * The data used to create many SolicitudLimpiezas.
     */
    data: SolicitudLimpiezaCreateManyInput | SolicitudLimpiezaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SolicitudLimpieza update
   */
  export type SolicitudLimpiezaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudLimpieza
     */
    select?: SolicitudLimpiezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudLimpieza
     */
    omit?: SolicitudLimpiezaOmit<ExtArgs> | null
    /**
     * The data needed to update a SolicitudLimpieza.
     */
    data: XOR<SolicitudLimpiezaUpdateInput, SolicitudLimpiezaUncheckedUpdateInput>
    /**
     * Choose, which SolicitudLimpieza to update.
     */
    where: SolicitudLimpiezaWhereUniqueInput
  }

  /**
   * SolicitudLimpieza updateMany
   */
  export type SolicitudLimpiezaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SolicitudLimpiezas.
     */
    data: XOR<SolicitudLimpiezaUpdateManyMutationInput, SolicitudLimpiezaUncheckedUpdateManyInput>
    /**
     * Filter which SolicitudLimpiezas to update
     */
    where?: SolicitudLimpiezaWhereInput
    /**
     * Limit how many SolicitudLimpiezas to update.
     */
    limit?: number
  }

  /**
   * SolicitudLimpieza updateManyAndReturn
   */
  export type SolicitudLimpiezaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudLimpieza
     */
    select?: SolicitudLimpiezaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudLimpieza
     */
    omit?: SolicitudLimpiezaOmit<ExtArgs> | null
    /**
     * The data used to update SolicitudLimpiezas.
     */
    data: XOR<SolicitudLimpiezaUpdateManyMutationInput, SolicitudLimpiezaUncheckedUpdateManyInput>
    /**
     * Filter which SolicitudLimpiezas to update
     */
    where?: SolicitudLimpiezaWhereInput
    /**
     * Limit how many SolicitudLimpiezas to update.
     */
    limit?: number
  }

  /**
   * SolicitudLimpieza upsert
   */
  export type SolicitudLimpiezaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudLimpieza
     */
    select?: SolicitudLimpiezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudLimpieza
     */
    omit?: SolicitudLimpiezaOmit<ExtArgs> | null
    /**
     * The filter to search for the SolicitudLimpieza to update in case it exists.
     */
    where: SolicitudLimpiezaWhereUniqueInput
    /**
     * In case the SolicitudLimpieza found by the `where` argument doesn't exist, create a new SolicitudLimpieza with this data.
     */
    create: XOR<SolicitudLimpiezaCreateInput, SolicitudLimpiezaUncheckedCreateInput>
    /**
     * In case the SolicitudLimpieza was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolicitudLimpiezaUpdateInput, SolicitudLimpiezaUncheckedUpdateInput>
  }

  /**
   * SolicitudLimpieza delete
   */
  export type SolicitudLimpiezaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudLimpieza
     */
    select?: SolicitudLimpiezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudLimpieza
     */
    omit?: SolicitudLimpiezaOmit<ExtArgs> | null
    /**
     * Filter which SolicitudLimpieza to delete.
     */
    where: SolicitudLimpiezaWhereUniqueInput
  }

  /**
   * SolicitudLimpieza deleteMany
   */
  export type SolicitudLimpiezaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolicitudLimpiezas to delete
     */
    where?: SolicitudLimpiezaWhereInput
    /**
     * Limit how many SolicitudLimpiezas to delete.
     */
    limit?: number
  }

  /**
   * SolicitudLimpieza without action
   */
  export type SolicitudLimpiezaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudLimpieza
     */
    select?: SolicitudLimpiezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudLimpieza
     */
    omit?: SolicitudLimpiezaOmit<ExtArgs> | null
  }


  /**
   * Model MensajeContacto
   */

  export type AggregateMensajeContacto = {
    _count: MensajeContactoCountAggregateOutputType | null
    _avg: MensajeContactoAvgAggregateOutputType | null
    _sum: MensajeContactoSumAggregateOutputType | null
    _min: MensajeContactoMinAggregateOutputType | null
    _max: MensajeContactoMaxAggregateOutputType | null
  }

  export type MensajeContactoAvgAggregateOutputType = {
    id: number | null
  }

  export type MensajeContactoSumAggregateOutputType = {
    id: number | null
  }

  export type MensajeContactoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    telefono: string | null
    mensaje: string | null
    leido: boolean | null
    creadoEn: Date | null
  }

  export type MensajeContactoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    telefono: string | null
    mensaje: string | null
    leido: boolean | null
    creadoEn: Date | null
  }

  export type MensajeContactoCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    telefono: number
    mensaje: number
    leido: number
    creadoEn: number
    _all: number
  }


  export type MensajeContactoAvgAggregateInputType = {
    id?: true
  }

  export type MensajeContactoSumAggregateInputType = {
    id?: true
  }

  export type MensajeContactoMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    mensaje?: true
    leido?: true
    creadoEn?: true
  }

  export type MensajeContactoMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    mensaje?: true
    leido?: true
    creadoEn?: true
  }

  export type MensajeContactoCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    mensaje?: true
    leido?: true
    creadoEn?: true
    _all?: true
  }

  export type MensajeContactoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MensajeContacto to aggregate.
     */
    where?: MensajeContactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensajeContactos to fetch.
     */
    orderBy?: MensajeContactoOrderByWithRelationInput | MensajeContactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensajeContactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensajeContactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensajeContactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MensajeContactos
    **/
    _count?: true | MensajeContactoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensajeContactoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensajeContactoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensajeContactoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensajeContactoMaxAggregateInputType
  }

  export type GetMensajeContactoAggregateType<T extends MensajeContactoAggregateArgs> = {
        [P in keyof T & keyof AggregateMensajeContacto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensajeContacto[P]>
      : GetScalarType<T[P], AggregateMensajeContacto[P]>
  }




  export type MensajeContactoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeContactoWhereInput
    orderBy?: MensajeContactoOrderByWithAggregationInput | MensajeContactoOrderByWithAggregationInput[]
    by: MensajeContactoScalarFieldEnum[] | MensajeContactoScalarFieldEnum
    having?: MensajeContactoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensajeContactoCountAggregateInputType | true
    _avg?: MensajeContactoAvgAggregateInputType
    _sum?: MensajeContactoSumAggregateInputType
    _min?: MensajeContactoMinAggregateInputType
    _max?: MensajeContactoMaxAggregateInputType
  }

  export type MensajeContactoGroupByOutputType = {
    id: number
    nombre: string
    email: string | null
    telefono: string | null
    mensaje: string
    leido: boolean
    creadoEn: Date
    _count: MensajeContactoCountAggregateOutputType | null
    _avg: MensajeContactoAvgAggregateOutputType | null
    _sum: MensajeContactoSumAggregateOutputType | null
    _min: MensajeContactoMinAggregateOutputType | null
    _max: MensajeContactoMaxAggregateOutputType | null
  }

  type GetMensajeContactoGroupByPayload<T extends MensajeContactoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensajeContactoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensajeContactoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensajeContactoGroupByOutputType[P]>
            : GetScalarType<T[P], MensajeContactoGroupByOutputType[P]>
        }
      >
    >


  export type MensajeContactoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    mensaje?: boolean
    leido?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["mensajeContacto"]>

  export type MensajeContactoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    mensaje?: boolean
    leido?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["mensajeContacto"]>

  export type MensajeContactoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    mensaje?: boolean
    leido?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["mensajeContacto"]>

  export type MensajeContactoSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    mensaje?: boolean
    leido?: boolean
    creadoEn?: boolean
  }

  export type MensajeContactoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "telefono" | "mensaje" | "leido" | "creadoEn", ExtArgs["result"]["mensajeContacto"]>

  export type $MensajeContactoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MensajeContacto"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string | null
      telefono: string | null
      mensaje: string
      leido: boolean
      creadoEn: Date
    }, ExtArgs["result"]["mensajeContacto"]>
    composites: {}
  }

  type MensajeContactoGetPayload<S extends boolean | null | undefined | MensajeContactoDefaultArgs> = $Result.GetResult<Prisma.$MensajeContactoPayload, S>

  type MensajeContactoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MensajeContactoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensajeContactoCountAggregateInputType | true
    }

  export interface MensajeContactoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MensajeContacto'], meta: { name: 'MensajeContacto' } }
    /**
     * Find zero or one MensajeContacto that matches the filter.
     * @param {MensajeContactoFindUniqueArgs} args - Arguments to find a MensajeContacto
     * @example
     * // Get one MensajeContacto
     * const mensajeContacto = await prisma.mensajeContacto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensajeContactoFindUniqueArgs>(args: SelectSubset<T, MensajeContactoFindUniqueArgs<ExtArgs>>): Prisma__MensajeContactoClient<$Result.GetResult<Prisma.$MensajeContactoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MensajeContacto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensajeContactoFindUniqueOrThrowArgs} args - Arguments to find a MensajeContacto
     * @example
     * // Get one MensajeContacto
     * const mensajeContacto = await prisma.mensajeContacto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensajeContactoFindUniqueOrThrowArgs>(args: SelectSubset<T, MensajeContactoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensajeContactoClient<$Result.GetResult<Prisma.$MensajeContactoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MensajeContacto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeContactoFindFirstArgs} args - Arguments to find a MensajeContacto
     * @example
     * // Get one MensajeContacto
     * const mensajeContacto = await prisma.mensajeContacto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensajeContactoFindFirstArgs>(args?: SelectSubset<T, MensajeContactoFindFirstArgs<ExtArgs>>): Prisma__MensajeContactoClient<$Result.GetResult<Prisma.$MensajeContactoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MensajeContacto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeContactoFindFirstOrThrowArgs} args - Arguments to find a MensajeContacto
     * @example
     * // Get one MensajeContacto
     * const mensajeContacto = await prisma.mensajeContacto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensajeContactoFindFirstOrThrowArgs>(args?: SelectSubset<T, MensajeContactoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensajeContactoClient<$Result.GetResult<Prisma.$MensajeContactoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MensajeContactos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeContactoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MensajeContactos
     * const mensajeContactos = await prisma.mensajeContacto.findMany()
     * 
     * // Get first 10 MensajeContactos
     * const mensajeContactos = await prisma.mensajeContacto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensajeContactoWithIdOnly = await prisma.mensajeContacto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensajeContactoFindManyArgs>(args?: SelectSubset<T, MensajeContactoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajeContactoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MensajeContacto.
     * @param {MensajeContactoCreateArgs} args - Arguments to create a MensajeContacto.
     * @example
     * // Create one MensajeContacto
     * const MensajeContacto = await prisma.mensajeContacto.create({
     *   data: {
     *     // ... data to create a MensajeContacto
     *   }
     * })
     * 
     */
    create<T extends MensajeContactoCreateArgs>(args: SelectSubset<T, MensajeContactoCreateArgs<ExtArgs>>): Prisma__MensajeContactoClient<$Result.GetResult<Prisma.$MensajeContactoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MensajeContactos.
     * @param {MensajeContactoCreateManyArgs} args - Arguments to create many MensajeContactos.
     * @example
     * // Create many MensajeContactos
     * const mensajeContacto = await prisma.mensajeContacto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensajeContactoCreateManyArgs>(args?: SelectSubset<T, MensajeContactoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MensajeContactos and returns the data saved in the database.
     * @param {MensajeContactoCreateManyAndReturnArgs} args - Arguments to create many MensajeContactos.
     * @example
     * // Create many MensajeContactos
     * const mensajeContacto = await prisma.mensajeContacto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MensajeContactos and only return the `id`
     * const mensajeContactoWithIdOnly = await prisma.mensajeContacto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensajeContactoCreateManyAndReturnArgs>(args?: SelectSubset<T, MensajeContactoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajeContactoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MensajeContacto.
     * @param {MensajeContactoDeleteArgs} args - Arguments to delete one MensajeContacto.
     * @example
     * // Delete one MensajeContacto
     * const MensajeContacto = await prisma.mensajeContacto.delete({
     *   where: {
     *     // ... filter to delete one MensajeContacto
     *   }
     * })
     * 
     */
    delete<T extends MensajeContactoDeleteArgs>(args: SelectSubset<T, MensajeContactoDeleteArgs<ExtArgs>>): Prisma__MensajeContactoClient<$Result.GetResult<Prisma.$MensajeContactoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MensajeContacto.
     * @param {MensajeContactoUpdateArgs} args - Arguments to update one MensajeContacto.
     * @example
     * // Update one MensajeContacto
     * const mensajeContacto = await prisma.mensajeContacto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensajeContactoUpdateArgs>(args: SelectSubset<T, MensajeContactoUpdateArgs<ExtArgs>>): Prisma__MensajeContactoClient<$Result.GetResult<Prisma.$MensajeContactoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MensajeContactos.
     * @param {MensajeContactoDeleteManyArgs} args - Arguments to filter MensajeContactos to delete.
     * @example
     * // Delete a few MensajeContactos
     * const { count } = await prisma.mensajeContacto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensajeContactoDeleteManyArgs>(args?: SelectSubset<T, MensajeContactoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MensajeContactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeContactoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MensajeContactos
     * const mensajeContacto = await prisma.mensajeContacto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensajeContactoUpdateManyArgs>(args: SelectSubset<T, MensajeContactoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MensajeContactos and returns the data updated in the database.
     * @param {MensajeContactoUpdateManyAndReturnArgs} args - Arguments to update many MensajeContactos.
     * @example
     * // Update many MensajeContactos
     * const mensajeContacto = await prisma.mensajeContacto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MensajeContactos and only return the `id`
     * const mensajeContactoWithIdOnly = await prisma.mensajeContacto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MensajeContactoUpdateManyAndReturnArgs>(args: SelectSubset<T, MensajeContactoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajeContactoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MensajeContacto.
     * @param {MensajeContactoUpsertArgs} args - Arguments to update or create a MensajeContacto.
     * @example
     * // Update or create a MensajeContacto
     * const mensajeContacto = await prisma.mensajeContacto.upsert({
     *   create: {
     *     // ... data to create a MensajeContacto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MensajeContacto we want to update
     *   }
     * })
     */
    upsert<T extends MensajeContactoUpsertArgs>(args: SelectSubset<T, MensajeContactoUpsertArgs<ExtArgs>>): Prisma__MensajeContactoClient<$Result.GetResult<Prisma.$MensajeContactoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MensajeContactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeContactoCountArgs} args - Arguments to filter MensajeContactos to count.
     * @example
     * // Count the number of MensajeContactos
     * const count = await prisma.mensajeContacto.count({
     *   where: {
     *     // ... the filter for the MensajeContactos we want to count
     *   }
     * })
    **/
    count<T extends MensajeContactoCountArgs>(
      args?: Subset<T, MensajeContactoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensajeContactoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MensajeContacto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeContactoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensajeContactoAggregateArgs>(args: Subset<T, MensajeContactoAggregateArgs>): Prisma.PrismaPromise<GetMensajeContactoAggregateType<T>>

    /**
     * Group by MensajeContacto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeContactoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MensajeContactoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensajeContactoGroupByArgs['orderBy'] }
        : { orderBy?: MensajeContactoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MensajeContactoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensajeContactoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MensajeContacto model
   */
  readonly fields: MensajeContactoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MensajeContacto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensajeContactoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MensajeContacto model
   */ 
  interface MensajeContactoFieldRefs {
    readonly id: FieldRef<"MensajeContacto", 'Int'>
    readonly nombre: FieldRef<"MensajeContacto", 'String'>
    readonly email: FieldRef<"MensajeContacto", 'String'>
    readonly telefono: FieldRef<"MensajeContacto", 'String'>
    readonly mensaje: FieldRef<"MensajeContacto", 'String'>
    readonly leido: FieldRef<"MensajeContacto", 'Boolean'>
    readonly creadoEn: FieldRef<"MensajeContacto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MensajeContacto findUnique
   */
  export type MensajeContactoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeContacto
     */
    select?: MensajeContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensajeContacto
     */
    omit?: MensajeContactoOmit<ExtArgs> | null
    /**
     * Filter, which MensajeContacto to fetch.
     */
    where: MensajeContactoWhereUniqueInput
  }

  /**
   * MensajeContacto findUniqueOrThrow
   */
  export type MensajeContactoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeContacto
     */
    select?: MensajeContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensajeContacto
     */
    omit?: MensajeContactoOmit<ExtArgs> | null
    /**
     * Filter, which MensajeContacto to fetch.
     */
    where: MensajeContactoWhereUniqueInput
  }

  /**
   * MensajeContacto findFirst
   */
  export type MensajeContactoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeContacto
     */
    select?: MensajeContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensajeContacto
     */
    omit?: MensajeContactoOmit<ExtArgs> | null
    /**
     * Filter, which MensajeContacto to fetch.
     */
    where?: MensajeContactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensajeContactos to fetch.
     */
    orderBy?: MensajeContactoOrderByWithRelationInput | MensajeContactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MensajeContactos.
     */
    cursor?: MensajeContactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensajeContactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensajeContactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MensajeContactos.
     */
    distinct?: MensajeContactoScalarFieldEnum | MensajeContactoScalarFieldEnum[]
  }

  /**
   * MensajeContacto findFirstOrThrow
   */
  export type MensajeContactoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeContacto
     */
    select?: MensajeContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensajeContacto
     */
    omit?: MensajeContactoOmit<ExtArgs> | null
    /**
     * Filter, which MensajeContacto to fetch.
     */
    where?: MensajeContactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensajeContactos to fetch.
     */
    orderBy?: MensajeContactoOrderByWithRelationInput | MensajeContactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MensajeContactos.
     */
    cursor?: MensajeContactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensajeContactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensajeContactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MensajeContactos.
     */
    distinct?: MensajeContactoScalarFieldEnum | MensajeContactoScalarFieldEnum[]
  }

  /**
   * MensajeContacto findMany
   */
  export type MensajeContactoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeContacto
     */
    select?: MensajeContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensajeContacto
     */
    omit?: MensajeContactoOmit<ExtArgs> | null
    /**
     * Filter, which MensajeContactos to fetch.
     */
    where?: MensajeContactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensajeContactos to fetch.
     */
    orderBy?: MensajeContactoOrderByWithRelationInput | MensajeContactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MensajeContactos.
     */
    cursor?: MensajeContactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensajeContactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensajeContactos.
     */
    skip?: number
    distinct?: MensajeContactoScalarFieldEnum | MensajeContactoScalarFieldEnum[]
  }

  /**
   * MensajeContacto create
   */
  export type MensajeContactoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeContacto
     */
    select?: MensajeContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensajeContacto
     */
    omit?: MensajeContactoOmit<ExtArgs> | null
    /**
     * The data needed to create a MensajeContacto.
     */
    data: XOR<MensajeContactoCreateInput, MensajeContactoUncheckedCreateInput>
  }

  /**
   * MensajeContacto createMany
   */
  export type MensajeContactoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MensajeContactos.
     */
    data: MensajeContactoCreateManyInput | MensajeContactoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MensajeContacto createManyAndReturn
   */
  export type MensajeContactoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeContacto
     */
    select?: MensajeContactoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MensajeContacto
     */
    omit?: MensajeContactoOmit<ExtArgs> | null
    /**
     * The data used to create many MensajeContactos.
     */
    data: MensajeContactoCreateManyInput | MensajeContactoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MensajeContacto update
   */
  export type MensajeContactoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeContacto
     */
    select?: MensajeContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensajeContacto
     */
    omit?: MensajeContactoOmit<ExtArgs> | null
    /**
     * The data needed to update a MensajeContacto.
     */
    data: XOR<MensajeContactoUpdateInput, MensajeContactoUncheckedUpdateInput>
    /**
     * Choose, which MensajeContacto to update.
     */
    where: MensajeContactoWhereUniqueInput
  }

  /**
   * MensajeContacto updateMany
   */
  export type MensajeContactoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MensajeContactos.
     */
    data: XOR<MensajeContactoUpdateManyMutationInput, MensajeContactoUncheckedUpdateManyInput>
    /**
     * Filter which MensajeContactos to update
     */
    where?: MensajeContactoWhereInput
    /**
     * Limit how many MensajeContactos to update.
     */
    limit?: number
  }

  /**
   * MensajeContacto updateManyAndReturn
   */
  export type MensajeContactoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeContacto
     */
    select?: MensajeContactoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MensajeContacto
     */
    omit?: MensajeContactoOmit<ExtArgs> | null
    /**
     * The data used to update MensajeContactos.
     */
    data: XOR<MensajeContactoUpdateManyMutationInput, MensajeContactoUncheckedUpdateManyInput>
    /**
     * Filter which MensajeContactos to update
     */
    where?: MensajeContactoWhereInput
    /**
     * Limit how many MensajeContactos to update.
     */
    limit?: number
  }

  /**
   * MensajeContacto upsert
   */
  export type MensajeContactoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeContacto
     */
    select?: MensajeContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensajeContacto
     */
    omit?: MensajeContactoOmit<ExtArgs> | null
    /**
     * The filter to search for the MensajeContacto to update in case it exists.
     */
    where: MensajeContactoWhereUniqueInput
    /**
     * In case the MensajeContacto found by the `where` argument doesn't exist, create a new MensajeContacto with this data.
     */
    create: XOR<MensajeContactoCreateInput, MensajeContactoUncheckedCreateInput>
    /**
     * In case the MensajeContacto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensajeContactoUpdateInput, MensajeContactoUncheckedUpdateInput>
  }

  /**
   * MensajeContacto delete
   */
  export type MensajeContactoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeContacto
     */
    select?: MensajeContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensajeContacto
     */
    omit?: MensajeContactoOmit<ExtArgs> | null
    /**
     * Filter which MensajeContacto to delete.
     */
    where: MensajeContactoWhereUniqueInput
  }

  /**
   * MensajeContacto deleteMany
   */
  export type MensajeContactoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MensajeContactos to delete
     */
    where?: MensajeContactoWhereInput
    /**
     * Limit how many MensajeContactos to delete.
     */
    limit?: number
  }

  /**
   * MensajeContacto without action
   */
  export type MensajeContactoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeContacto
     */
    select?: MensajeContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MensajeContacto
     */
    omit?: MensajeContactoOmit<ExtArgs> | null
  }


  /**
   * Model InformacionUtil
   */

  export type AggregateInformacionUtil = {
    _count: InformacionUtilCountAggregateOutputType | null
    _avg: InformacionUtilAvgAggregateOutputType | null
    _sum: InformacionUtilSumAggregateOutputType | null
    _min: InformacionUtilMinAggregateOutputType | null
    _max: InformacionUtilMaxAggregateOutputType | null
  }

  export type InformacionUtilAvgAggregateOutputType = {
    id: number | null
  }

  export type InformacionUtilSumAggregateOutputType = {
    id: number | null
  }

  export type InformacionUtilMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    telefono: string | null
    direccion: string | null
    horario: string | null
    descripcion: string | null
    leido: boolean | null
    creadoEn: Date | null
  }

  export type InformacionUtilMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    telefono: string | null
    direccion: string | null
    horario: string | null
    descripcion: string | null
    leido: boolean | null
    creadoEn: Date | null
  }

  export type InformacionUtilCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    telefono: number
    direccion: number
    horario: number
    descripcion: number
    leido: number
    creadoEn: number
    _all: number
  }


  export type InformacionUtilAvgAggregateInputType = {
    id?: true
  }

  export type InformacionUtilSumAggregateInputType = {
    id?: true
  }

  export type InformacionUtilMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    direccion?: true
    horario?: true
    descripcion?: true
    leido?: true
    creadoEn?: true
  }

  export type InformacionUtilMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    direccion?: true
    horario?: true
    descripcion?: true
    leido?: true
    creadoEn?: true
  }

  export type InformacionUtilCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    direccion?: true
    horario?: true
    descripcion?: true
    leido?: true
    creadoEn?: true
    _all?: true
  }

  export type InformacionUtilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InformacionUtil to aggregate.
     */
    where?: InformacionUtilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InformacionUtils to fetch.
     */
    orderBy?: InformacionUtilOrderByWithRelationInput | InformacionUtilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InformacionUtilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InformacionUtils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InformacionUtils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InformacionUtils
    **/
    _count?: true | InformacionUtilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InformacionUtilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InformacionUtilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InformacionUtilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InformacionUtilMaxAggregateInputType
  }

  export type GetInformacionUtilAggregateType<T extends InformacionUtilAggregateArgs> = {
        [P in keyof T & keyof AggregateInformacionUtil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInformacionUtil[P]>
      : GetScalarType<T[P], AggregateInformacionUtil[P]>
  }




  export type InformacionUtilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InformacionUtilWhereInput
    orderBy?: InformacionUtilOrderByWithAggregationInput | InformacionUtilOrderByWithAggregationInput[]
    by: InformacionUtilScalarFieldEnum[] | InformacionUtilScalarFieldEnum
    having?: InformacionUtilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InformacionUtilCountAggregateInputType | true
    _avg?: InformacionUtilAvgAggregateInputType
    _sum?: InformacionUtilSumAggregateInputType
    _min?: InformacionUtilMinAggregateInputType
    _max?: InformacionUtilMaxAggregateInputType
  }

  export type InformacionUtilGroupByOutputType = {
    id: number
    nombre: string
    email: string | null
    telefono: string
    direccion: string | null
    horario: string | null
    descripcion: string | null
    leido: boolean
    creadoEn: Date
    _count: InformacionUtilCountAggregateOutputType | null
    _avg: InformacionUtilAvgAggregateOutputType | null
    _sum: InformacionUtilSumAggregateOutputType | null
    _min: InformacionUtilMinAggregateOutputType | null
    _max: InformacionUtilMaxAggregateOutputType | null
  }

  type GetInformacionUtilGroupByPayload<T extends InformacionUtilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InformacionUtilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InformacionUtilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InformacionUtilGroupByOutputType[P]>
            : GetScalarType<T[P], InformacionUtilGroupByOutputType[P]>
        }
      >
    >


  export type InformacionUtilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    direccion?: boolean
    horario?: boolean
    descripcion?: boolean
    leido?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["informacionUtil"]>

  export type InformacionUtilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    direccion?: boolean
    horario?: boolean
    descripcion?: boolean
    leido?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["informacionUtil"]>

  export type InformacionUtilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    direccion?: boolean
    horario?: boolean
    descripcion?: boolean
    leido?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["informacionUtil"]>

  export type InformacionUtilSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    direccion?: boolean
    horario?: boolean
    descripcion?: boolean
    leido?: boolean
    creadoEn?: boolean
  }

  export type InformacionUtilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "telefono" | "direccion" | "horario" | "descripcion" | "leido" | "creadoEn", ExtArgs["result"]["informacionUtil"]>

  export type $InformacionUtilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InformacionUtil"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string | null
      telefono: string
      direccion: string | null
      horario: string | null
      descripcion: string | null
      leido: boolean
      creadoEn: Date
    }, ExtArgs["result"]["informacionUtil"]>
    composites: {}
  }

  type InformacionUtilGetPayload<S extends boolean | null | undefined | InformacionUtilDefaultArgs> = $Result.GetResult<Prisma.$InformacionUtilPayload, S>

  type InformacionUtilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InformacionUtilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InformacionUtilCountAggregateInputType | true
    }

  export interface InformacionUtilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InformacionUtil'], meta: { name: 'InformacionUtil' } }
    /**
     * Find zero or one InformacionUtil that matches the filter.
     * @param {InformacionUtilFindUniqueArgs} args - Arguments to find a InformacionUtil
     * @example
     * // Get one InformacionUtil
     * const informacionUtil = await prisma.informacionUtil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InformacionUtilFindUniqueArgs>(args: SelectSubset<T, InformacionUtilFindUniqueArgs<ExtArgs>>): Prisma__InformacionUtilClient<$Result.GetResult<Prisma.$InformacionUtilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InformacionUtil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InformacionUtilFindUniqueOrThrowArgs} args - Arguments to find a InformacionUtil
     * @example
     * // Get one InformacionUtil
     * const informacionUtil = await prisma.informacionUtil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InformacionUtilFindUniqueOrThrowArgs>(args: SelectSubset<T, InformacionUtilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InformacionUtilClient<$Result.GetResult<Prisma.$InformacionUtilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InformacionUtil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InformacionUtilFindFirstArgs} args - Arguments to find a InformacionUtil
     * @example
     * // Get one InformacionUtil
     * const informacionUtil = await prisma.informacionUtil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InformacionUtilFindFirstArgs>(args?: SelectSubset<T, InformacionUtilFindFirstArgs<ExtArgs>>): Prisma__InformacionUtilClient<$Result.GetResult<Prisma.$InformacionUtilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InformacionUtil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InformacionUtilFindFirstOrThrowArgs} args - Arguments to find a InformacionUtil
     * @example
     * // Get one InformacionUtil
     * const informacionUtil = await prisma.informacionUtil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InformacionUtilFindFirstOrThrowArgs>(args?: SelectSubset<T, InformacionUtilFindFirstOrThrowArgs<ExtArgs>>): Prisma__InformacionUtilClient<$Result.GetResult<Prisma.$InformacionUtilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InformacionUtils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InformacionUtilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InformacionUtils
     * const informacionUtils = await prisma.informacionUtil.findMany()
     * 
     * // Get first 10 InformacionUtils
     * const informacionUtils = await prisma.informacionUtil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const informacionUtilWithIdOnly = await prisma.informacionUtil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InformacionUtilFindManyArgs>(args?: SelectSubset<T, InformacionUtilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InformacionUtilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InformacionUtil.
     * @param {InformacionUtilCreateArgs} args - Arguments to create a InformacionUtil.
     * @example
     * // Create one InformacionUtil
     * const InformacionUtil = await prisma.informacionUtil.create({
     *   data: {
     *     // ... data to create a InformacionUtil
     *   }
     * })
     * 
     */
    create<T extends InformacionUtilCreateArgs>(args: SelectSubset<T, InformacionUtilCreateArgs<ExtArgs>>): Prisma__InformacionUtilClient<$Result.GetResult<Prisma.$InformacionUtilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InformacionUtils.
     * @param {InformacionUtilCreateManyArgs} args - Arguments to create many InformacionUtils.
     * @example
     * // Create many InformacionUtils
     * const informacionUtil = await prisma.informacionUtil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InformacionUtilCreateManyArgs>(args?: SelectSubset<T, InformacionUtilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InformacionUtils and returns the data saved in the database.
     * @param {InformacionUtilCreateManyAndReturnArgs} args - Arguments to create many InformacionUtils.
     * @example
     * // Create many InformacionUtils
     * const informacionUtil = await prisma.informacionUtil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InformacionUtils and only return the `id`
     * const informacionUtilWithIdOnly = await prisma.informacionUtil.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InformacionUtilCreateManyAndReturnArgs>(args?: SelectSubset<T, InformacionUtilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InformacionUtilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InformacionUtil.
     * @param {InformacionUtilDeleteArgs} args - Arguments to delete one InformacionUtil.
     * @example
     * // Delete one InformacionUtil
     * const InformacionUtil = await prisma.informacionUtil.delete({
     *   where: {
     *     // ... filter to delete one InformacionUtil
     *   }
     * })
     * 
     */
    delete<T extends InformacionUtilDeleteArgs>(args: SelectSubset<T, InformacionUtilDeleteArgs<ExtArgs>>): Prisma__InformacionUtilClient<$Result.GetResult<Prisma.$InformacionUtilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InformacionUtil.
     * @param {InformacionUtilUpdateArgs} args - Arguments to update one InformacionUtil.
     * @example
     * // Update one InformacionUtil
     * const informacionUtil = await prisma.informacionUtil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InformacionUtilUpdateArgs>(args: SelectSubset<T, InformacionUtilUpdateArgs<ExtArgs>>): Prisma__InformacionUtilClient<$Result.GetResult<Prisma.$InformacionUtilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InformacionUtils.
     * @param {InformacionUtilDeleteManyArgs} args - Arguments to filter InformacionUtils to delete.
     * @example
     * // Delete a few InformacionUtils
     * const { count } = await prisma.informacionUtil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InformacionUtilDeleteManyArgs>(args?: SelectSubset<T, InformacionUtilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InformacionUtils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InformacionUtilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InformacionUtils
     * const informacionUtil = await prisma.informacionUtil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InformacionUtilUpdateManyArgs>(args: SelectSubset<T, InformacionUtilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InformacionUtils and returns the data updated in the database.
     * @param {InformacionUtilUpdateManyAndReturnArgs} args - Arguments to update many InformacionUtils.
     * @example
     * // Update many InformacionUtils
     * const informacionUtil = await prisma.informacionUtil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InformacionUtils and only return the `id`
     * const informacionUtilWithIdOnly = await prisma.informacionUtil.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InformacionUtilUpdateManyAndReturnArgs>(args: SelectSubset<T, InformacionUtilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InformacionUtilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InformacionUtil.
     * @param {InformacionUtilUpsertArgs} args - Arguments to update or create a InformacionUtil.
     * @example
     * // Update or create a InformacionUtil
     * const informacionUtil = await prisma.informacionUtil.upsert({
     *   create: {
     *     // ... data to create a InformacionUtil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InformacionUtil we want to update
     *   }
     * })
     */
    upsert<T extends InformacionUtilUpsertArgs>(args: SelectSubset<T, InformacionUtilUpsertArgs<ExtArgs>>): Prisma__InformacionUtilClient<$Result.GetResult<Prisma.$InformacionUtilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InformacionUtils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InformacionUtilCountArgs} args - Arguments to filter InformacionUtils to count.
     * @example
     * // Count the number of InformacionUtils
     * const count = await prisma.informacionUtil.count({
     *   where: {
     *     // ... the filter for the InformacionUtils we want to count
     *   }
     * })
    **/
    count<T extends InformacionUtilCountArgs>(
      args?: Subset<T, InformacionUtilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InformacionUtilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InformacionUtil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InformacionUtilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InformacionUtilAggregateArgs>(args: Subset<T, InformacionUtilAggregateArgs>): Prisma.PrismaPromise<GetInformacionUtilAggregateType<T>>

    /**
     * Group by InformacionUtil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InformacionUtilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InformacionUtilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InformacionUtilGroupByArgs['orderBy'] }
        : { orderBy?: InformacionUtilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InformacionUtilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInformacionUtilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InformacionUtil model
   */
  readonly fields: InformacionUtilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InformacionUtil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InformacionUtilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InformacionUtil model
   */ 
  interface InformacionUtilFieldRefs {
    readonly id: FieldRef<"InformacionUtil", 'Int'>
    readonly nombre: FieldRef<"InformacionUtil", 'String'>
    readonly email: FieldRef<"InformacionUtil", 'String'>
    readonly telefono: FieldRef<"InformacionUtil", 'String'>
    readonly direccion: FieldRef<"InformacionUtil", 'String'>
    readonly horario: FieldRef<"InformacionUtil", 'String'>
    readonly descripcion: FieldRef<"InformacionUtil", 'String'>
    readonly leido: FieldRef<"InformacionUtil", 'Boolean'>
    readonly creadoEn: FieldRef<"InformacionUtil", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InformacionUtil findUnique
   */
  export type InformacionUtilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InformacionUtil
     */
    select?: InformacionUtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InformacionUtil
     */
    omit?: InformacionUtilOmit<ExtArgs> | null
    /**
     * Filter, which InformacionUtil to fetch.
     */
    where: InformacionUtilWhereUniqueInput
  }

  /**
   * InformacionUtil findUniqueOrThrow
   */
  export type InformacionUtilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InformacionUtil
     */
    select?: InformacionUtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InformacionUtil
     */
    omit?: InformacionUtilOmit<ExtArgs> | null
    /**
     * Filter, which InformacionUtil to fetch.
     */
    where: InformacionUtilWhereUniqueInput
  }

  /**
   * InformacionUtil findFirst
   */
  export type InformacionUtilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InformacionUtil
     */
    select?: InformacionUtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InformacionUtil
     */
    omit?: InformacionUtilOmit<ExtArgs> | null
    /**
     * Filter, which InformacionUtil to fetch.
     */
    where?: InformacionUtilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InformacionUtils to fetch.
     */
    orderBy?: InformacionUtilOrderByWithRelationInput | InformacionUtilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InformacionUtils.
     */
    cursor?: InformacionUtilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InformacionUtils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InformacionUtils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InformacionUtils.
     */
    distinct?: InformacionUtilScalarFieldEnum | InformacionUtilScalarFieldEnum[]
  }

  /**
   * InformacionUtil findFirstOrThrow
   */
  export type InformacionUtilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InformacionUtil
     */
    select?: InformacionUtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InformacionUtil
     */
    omit?: InformacionUtilOmit<ExtArgs> | null
    /**
     * Filter, which InformacionUtil to fetch.
     */
    where?: InformacionUtilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InformacionUtils to fetch.
     */
    orderBy?: InformacionUtilOrderByWithRelationInput | InformacionUtilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InformacionUtils.
     */
    cursor?: InformacionUtilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InformacionUtils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InformacionUtils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InformacionUtils.
     */
    distinct?: InformacionUtilScalarFieldEnum | InformacionUtilScalarFieldEnum[]
  }

  /**
   * InformacionUtil findMany
   */
  export type InformacionUtilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InformacionUtil
     */
    select?: InformacionUtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InformacionUtil
     */
    omit?: InformacionUtilOmit<ExtArgs> | null
    /**
     * Filter, which InformacionUtils to fetch.
     */
    where?: InformacionUtilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InformacionUtils to fetch.
     */
    orderBy?: InformacionUtilOrderByWithRelationInput | InformacionUtilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InformacionUtils.
     */
    cursor?: InformacionUtilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InformacionUtils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InformacionUtils.
     */
    skip?: number
    distinct?: InformacionUtilScalarFieldEnum | InformacionUtilScalarFieldEnum[]
  }

  /**
   * InformacionUtil create
   */
  export type InformacionUtilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InformacionUtil
     */
    select?: InformacionUtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InformacionUtil
     */
    omit?: InformacionUtilOmit<ExtArgs> | null
    /**
     * The data needed to create a InformacionUtil.
     */
    data: XOR<InformacionUtilCreateInput, InformacionUtilUncheckedCreateInput>
  }

  /**
   * InformacionUtil createMany
   */
  export type InformacionUtilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InformacionUtils.
     */
    data: InformacionUtilCreateManyInput | InformacionUtilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InformacionUtil createManyAndReturn
   */
  export type InformacionUtilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InformacionUtil
     */
    select?: InformacionUtilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InformacionUtil
     */
    omit?: InformacionUtilOmit<ExtArgs> | null
    /**
     * The data used to create many InformacionUtils.
     */
    data: InformacionUtilCreateManyInput | InformacionUtilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InformacionUtil update
   */
  export type InformacionUtilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InformacionUtil
     */
    select?: InformacionUtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InformacionUtil
     */
    omit?: InformacionUtilOmit<ExtArgs> | null
    /**
     * The data needed to update a InformacionUtil.
     */
    data: XOR<InformacionUtilUpdateInput, InformacionUtilUncheckedUpdateInput>
    /**
     * Choose, which InformacionUtil to update.
     */
    where: InformacionUtilWhereUniqueInput
  }

  /**
   * InformacionUtil updateMany
   */
  export type InformacionUtilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InformacionUtils.
     */
    data: XOR<InformacionUtilUpdateManyMutationInput, InformacionUtilUncheckedUpdateManyInput>
    /**
     * Filter which InformacionUtils to update
     */
    where?: InformacionUtilWhereInput
    /**
     * Limit how many InformacionUtils to update.
     */
    limit?: number
  }

  /**
   * InformacionUtil updateManyAndReturn
   */
  export type InformacionUtilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InformacionUtil
     */
    select?: InformacionUtilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InformacionUtil
     */
    omit?: InformacionUtilOmit<ExtArgs> | null
    /**
     * The data used to update InformacionUtils.
     */
    data: XOR<InformacionUtilUpdateManyMutationInput, InformacionUtilUncheckedUpdateManyInput>
    /**
     * Filter which InformacionUtils to update
     */
    where?: InformacionUtilWhereInput
    /**
     * Limit how many InformacionUtils to update.
     */
    limit?: number
  }

  /**
   * InformacionUtil upsert
   */
  export type InformacionUtilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InformacionUtil
     */
    select?: InformacionUtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InformacionUtil
     */
    omit?: InformacionUtilOmit<ExtArgs> | null
    /**
     * The filter to search for the InformacionUtil to update in case it exists.
     */
    where: InformacionUtilWhereUniqueInput
    /**
     * In case the InformacionUtil found by the `where` argument doesn't exist, create a new InformacionUtil with this data.
     */
    create: XOR<InformacionUtilCreateInput, InformacionUtilUncheckedCreateInput>
    /**
     * In case the InformacionUtil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InformacionUtilUpdateInput, InformacionUtilUncheckedUpdateInput>
  }

  /**
   * InformacionUtil delete
   */
  export type InformacionUtilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InformacionUtil
     */
    select?: InformacionUtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InformacionUtil
     */
    omit?: InformacionUtilOmit<ExtArgs> | null
    /**
     * Filter which InformacionUtil to delete.
     */
    where: InformacionUtilWhereUniqueInput
  }

  /**
   * InformacionUtil deleteMany
   */
  export type InformacionUtilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InformacionUtils to delete
     */
    where?: InformacionUtilWhereInput
    /**
     * Limit how many InformacionUtils to delete.
     */
    limit?: number
  }

  /**
   * InformacionUtil without action
   */
  export type InformacionUtilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InformacionUtil
     */
    select?: InformacionUtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InformacionUtil
     */
    omit?: InformacionUtilOmit<ExtArgs> | null
  }


  /**
   * Model Mensaje
   */

  export type AggregateMensaje = {
    _count: MensajeCountAggregateOutputType | null
    _avg: MensajeAvgAggregateOutputType | null
    _sum: MensajeSumAggregateOutputType | null
    _min: MensajeMinAggregateOutputType | null
    _max: MensajeMaxAggregateOutputType | null
  }

  export type MensajeAvgAggregateOutputType = {
    id: number | null
  }

  export type MensajeSumAggregateOutputType = {
    id: number | null
  }

  export type MensajeMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    telefono: string | null
    mensaje: string | null
    leido: boolean | null
    creadoEn: Date | null
  }

  export type MensajeMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    telefono: string | null
    mensaje: string | null
    leido: boolean | null
    creadoEn: Date | null
  }

  export type MensajeCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    telefono: number
    mensaje: number
    leido: number
    creadoEn: number
    _all: number
  }


  export type MensajeAvgAggregateInputType = {
    id?: true
  }

  export type MensajeSumAggregateInputType = {
    id?: true
  }

  export type MensajeMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    mensaje?: true
    leido?: true
    creadoEn?: true
  }

  export type MensajeMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    mensaje?: true
    leido?: true
    creadoEn?: true
  }

  export type MensajeCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    mensaje?: true
    leido?: true
    creadoEn?: true
    _all?: true
  }

  export type MensajeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensaje to aggregate.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensajes
    **/
    _count?: true | MensajeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensajeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensajeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensajeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensajeMaxAggregateInputType
  }

  export type GetMensajeAggregateType<T extends MensajeAggregateArgs> = {
        [P in keyof T & keyof AggregateMensaje]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensaje[P]>
      : GetScalarType<T[P], AggregateMensaje[P]>
  }




  export type MensajeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithAggregationInput | MensajeOrderByWithAggregationInput[]
    by: MensajeScalarFieldEnum[] | MensajeScalarFieldEnum
    having?: MensajeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensajeCountAggregateInputType | true
    _avg?: MensajeAvgAggregateInputType
    _sum?: MensajeSumAggregateInputType
    _min?: MensajeMinAggregateInputType
    _max?: MensajeMaxAggregateInputType
  }

  export type MensajeGroupByOutputType = {
    id: number
    nombre: string
    email: string
    telefono: string | null
    mensaje: string
    leido: boolean
    creadoEn: Date
    _count: MensajeCountAggregateOutputType | null
    _avg: MensajeAvgAggregateOutputType | null
    _sum: MensajeSumAggregateOutputType | null
    _min: MensajeMinAggregateOutputType | null
    _max: MensajeMaxAggregateOutputType | null
  }

  type GetMensajeGroupByPayload<T extends MensajeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensajeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensajeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensajeGroupByOutputType[P]>
            : GetScalarType<T[P], MensajeGroupByOutputType[P]>
        }
      >
    >


  export type MensajeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    mensaje?: boolean
    leido?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    mensaje?: boolean
    leido?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    mensaje?: boolean
    leido?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    mensaje?: boolean
    leido?: boolean
    creadoEn?: boolean
  }

  export type MensajeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "telefono" | "mensaje" | "leido" | "creadoEn", ExtArgs["result"]["mensaje"]>

  export type $MensajePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensaje"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      telefono: string | null
      mensaje: string
      leido: boolean
      creadoEn: Date
    }, ExtArgs["result"]["mensaje"]>
    composites: {}
  }

  type MensajeGetPayload<S extends boolean | null | undefined | MensajeDefaultArgs> = $Result.GetResult<Prisma.$MensajePayload, S>

  type MensajeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MensajeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensajeCountAggregateInputType | true
    }

  export interface MensajeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensaje'], meta: { name: 'Mensaje' } }
    /**
     * Find zero or one Mensaje that matches the filter.
     * @param {MensajeFindUniqueArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensajeFindUniqueArgs>(args: SelectSubset<T, MensajeFindUniqueArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensaje that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensajeFindUniqueOrThrowArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensajeFindUniqueOrThrowArgs>(args: SelectSubset<T, MensajeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensaje that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindFirstArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensajeFindFirstArgs>(args?: SelectSubset<T, MensajeFindFirstArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensaje that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindFirstOrThrowArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensajeFindFirstOrThrowArgs>(args?: SelectSubset<T, MensajeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensajes
     * const mensajes = await prisma.mensaje.findMany()
     * 
     * // Get first 10 Mensajes
     * const mensajes = await prisma.mensaje.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensajeFindManyArgs>(args?: SelectSubset<T, MensajeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensaje.
     * @param {MensajeCreateArgs} args - Arguments to create a Mensaje.
     * @example
     * // Create one Mensaje
     * const Mensaje = await prisma.mensaje.create({
     *   data: {
     *     // ... data to create a Mensaje
     *   }
     * })
     * 
     */
    create<T extends MensajeCreateArgs>(args: SelectSubset<T, MensajeCreateArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensajes.
     * @param {MensajeCreateManyArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensaje = await prisma.mensaje.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensajeCreateManyArgs>(args?: SelectSubset<T, MensajeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensajes and returns the data saved in the database.
     * @param {MensajeCreateManyAndReturnArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensaje = await prisma.mensaje.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensajes and only return the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensajeCreateManyAndReturnArgs>(args?: SelectSubset<T, MensajeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mensaje.
     * @param {MensajeDeleteArgs} args - Arguments to delete one Mensaje.
     * @example
     * // Delete one Mensaje
     * const Mensaje = await prisma.mensaje.delete({
     *   where: {
     *     // ... filter to delete one Mensaje
     *   }
     * })
     * 
     */
    delete<T extends MensajeDeleteArgs>(args: SelectSubset<T, MensajeDeleteArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensaje.
     * @param {MensajeUpdateArgs} args - Arguments to update one Mensaje.
     * @example
     * // Update one Mensaje
     * const mensaje = await prisma.mensaje.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensajeUpdateArgs>(args: SelectSubset<T, MensajeUpdateArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensajes.
     * @param {MensajeDeleteManyArgs} args - Arguments to filter Mensajes to delete.
     * @example
     * // Delete a few Mensajes
     * const { count } = await prisma.mensaje.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensajeDeleteManyArgs>(args?: SelectSubset<T, MensajeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensajes
     * const mensaje = await prisma.mensaje.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensajeUpdateManyArgs>(args: SelectSubset<T, MensajeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes and returns the data updated in the database.
     * @param {MensajeUpdateManyAndReturnArgs} args - Arguments to update many Mensajes.
     * @example
     * // Update many Mensajes
     * const mensaje = await prisma.mensaje.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mensajes and only return the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MensajeUpdateManyAndReturnArgs>(args: SelectSubset<T, MensajeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mensaje.
     * @param {MensajeUpsertArgs} args - Arguments to update or create a Mensaje.
     * @example
     * // Update or create a Mensaje
     * const mensaje = await prisma.mensaje.upsert({
     *   create: {
     *     // ... data to create a Mensaje
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensaje we want to update
     *   }
     * })
     */
    upsert<T extends MensajeUpsertArgs>(args: SelectSubset<T, MensajeUpsertArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeCountArgs} args - Arguments to filter Mensajes to count.
     * @example
     * // Count the number of Mensajes
     * const count = await prisma.mensaje.count({
     *   where: {
     *     // ... the filter for the Mensajes we want to count
     *   }
     * })
    **/
    count<T extends MensajeCountArgs>(
      args?: Subset<T, MensajeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensajeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensajeAggregateArgs>(args: Subset<T, MensajeAggregateArgs>): Prisma.PrismaPromise<GetMensajeAggregateType<T>>

    /**
     * Group by Mensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MensajeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensajeGroupByArgs['orderBy'] }
        : { orderBy?: MensajeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MensajeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensajeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensaje model
   */
  readonly fields: MensajeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensaje.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensajeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mensaje model
   */ 
  interface MensajeFieldRefs {
    readonly id: FieldRef<"Mensaje", 'Int'>
    readonly nombre: FieldRef<"Mensaje", 'String'>
    readonly email: FieldRef<"Mensaje", 'String'>
    readonly telefono: FieldRef<"Mensaje", 'String'>
    readonly mensaje: FieldRef<"Mensaje", 'String'>
    readonly leido: FieldRef<"Mensaje", 'Boolean'>
    readonly creadoEn: FieldRef<"Mensaje", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mensaje findUnique
   */
  export type MensajeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje findUniqueOrThrow
   */
  export type MensajeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje findFirst
   */
  export type MensajeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje findFirstOrThrow
   */
  export type MensajeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje findMany
   */
  export type MensajeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Filter, which Mensajes to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje create
   */
  export type MensajeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * The data needed to create a Mensaje.
     */
    data: XOR<MensajeCreateInput, MensajeUncheckedCreateInput>
  }

  /**
   * Mensaje createMany
   */
  export type MensajeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensajes.
     */
    data: MensajeCreateManyInput | MensajeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mensaje createManyAndReturn
   */
  export type MensajeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * The data used to create many Mensajes.
     */
    data: MensajeCreateManyInput | MensajeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mensaje update
   */
  export type MensajeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * The data needed to update a Mensaje.
     */
    data: XOR<MensajeUpdateInput, MensajeUncheckedUpdateInput>
    /**
     * Choose, which Mensaje to update.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje updateMany
   */
  export type MensajeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensajes.
     */
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyInput>
    /**
     * Filter which Mensajes to update
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to update.
     */
    limit?: number
  }

  /**
   * Mensaje updateManyAndReturn
   */
  export type MensajeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * The data used to update Mensajes.
     */
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyInput>
    /**
     * Filter which Mensajes to update
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to update.
     */
    limit?: number
  }

  /**
   * Mensaje upsert
   */
  export type MensajeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * The filter to search for the Mensaje to update in case it exists.
     */
    where: MensajeWhereUniqueInput
    /**
     * In case the Mensaje found by the `where` argument doesn't exist, create a new Mensaje with this data.
     */
    create: XOR<MensajeCreateInput, MensajeUncheckedCreateInput>
    /**
     * In case the Mensaje was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensajeUpdateInput, MensajeUncheckedUpdateInput>
  }

  /**
   * Mensaje delete
   */
  export type MensajeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Filter which Mensaje to delete.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje deleteMany
   */
  export type MensajeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensajes to delete
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to delete.
     */
    limit?: number
  }

  /**
   * Mensaje without action
   */
  export type MensajeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
  }


  /**
   * Model TipoArticuloPersonalizado
   */

  export type AggregateTipoArticuloPersonalizado = {
    _count: TipoArticuloPersonalizadoCountAggregateOutputType | null
    _avg: TipoArticuloPersonalizadoAvgAggregateOutputType | null
    _sum: TipoArticuloPersonalizadoSumAggregateOutputType | null
    _min: TipoArticuloPersonalizadoMinAggregateOutputType | null
    _max: TipoArticuloPersonalizadoMaxAggregateOutputType | null
  }

  export type TipoArticuloPersonalizadoAvgAggregateOutputType = {
    id: number | null
    solicitudId: number | null
  }

  export type TipoArticuloPersonalizadoSumAggregateOutputType = {
    id: number | null
    solicitudId: number | null
  }

  export type TipoArticuloPersonalizadoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    solicitudId: number | null
    creadoEn: Date | null
  }

  export type TipoArticuloPersonalizadoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    solicitudId: number | null
    creadoEn: Date | null
  }

  export type TipoArticuloPersonalizadoCountAggregateOutputType = {
    id: number
    nombre: number
    solicitudId: number
    creadoEn: number
    _all: number
  }


  export type TipoArticuloPersonalizadoAvgAggregateInputType = {
    id?: true
    solicitudId?: true
  }

  export type TipoArticuloPersonalizadoSumAggregateInputType = {
    id?: true
    solicitudId?: true
  }

  export type TipoArticuloPersonalizadoMinAggregateInputType = {
    id?: true
    nombre?: true
    solicitudId?: true
    creadoEn?: true
  }

  export type TipoArticuloPersonalizadoMaxAggregateInputType = {
    id?: true
    nombre?: true
    solicitudId?: true
    creadoEn?: true
  }

  export type TipoArticuloPersonalizadoCountAggregateInputType = {
    id?: true
    nombre?: true
    solicitudId?: true
    creadoEn?: true
    _all?: true
  }

  export type TipoArticuloPersonalizadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoArticuloPersonalizado to aggregate.
     */
    where?: TipoArticuloPersonalizadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoArticuloPersonalizados to fetch.
     */
    orderBy?: TipoArticuloPersonalizadoOrderByWithRelationInput | TipoArticuloPersonalizadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoArticuloPersonalizadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoArticuloPersonalizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoArticuloPersonalizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoArticuloPersonalizados
    **/
    _count?: true | TipoArticuloPersonalizadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoArticuloPersonalizadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoArticuloPersonalizadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoArticuloPersonalizadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoArticuloPersonalizadoMaxAggregateInputType
  }

  export type GetTipoArticuloPersonalizadoAggregateType<T extends TipoArticuloPersonalizadoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoArticuloPersonalizado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoArticuloPersonalizado[P]>
      : GetScalarType<T[P], AggregateTipoArticuloPersonalizado[P]>
  }




  export type TipoArticuloPersonalizadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoArticuloPersonalizadoWhereInput
    orderBy?: TipoArticuloPersonalizadoOrderByWithAggregationInput | TipoArticuloPersonalizadoOrderByWithAggregationInput[]
    by: TipoArticuloPersonalizadoScalarFieldEnum[] | TipoArticuloPersonalizadoScalarFieldEnum
    having?: TipoArticuloPersonalizadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoArticuloPersonalizadoCountAggregateInputType | true
    _avg?: TipoArticuloPersonalizadoAvgAggregateInputType
    _sum?: TipoArticuloPersonalizadoSumAggregateInputType
    _min?: TipoArticuloPersonalizadoMinAggregateInputType
    _max?: TipoArticuloPersonalizadoMaxAggregateInputType
  }

  export type TipoArticuloPersonalizadoGroupByOutputType = {
    id: number
    nombre: string
    solicitudId: number
    creadoEn: Date
    _count: TipoArticuloPersonalizadoCountAggregateOutputType | null
    _avg: TipoArticuloPersonalizadoAvgAggregateOutputType | null
    _sum: TipoArticuloPersonalizadoSumAggregateOutputType | null
    _min: TipoArticuloPersonalizadoMinAggregateOutputType | null
    _max: TipoArticuloPersonalizadoMaxAggregateOutputType | null
  }

  type GetTipoArticuloPersonalizadoGroupByPayload<T extends TipoArticuloPersonalizadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoArticuloPersonalizadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoArticuloPersonalizadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoArticuloPersonalizadoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoArticuloPersonalizadoGroupByOutputType[P]>
        }
      >
    >


  export type TipoArticuloPersonalizadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    solicitudId?: boolean
    creadoEn?: boolean
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
    ArticuloSolicitud?: boolean | TipoArticuloPersonalizado$ArticuloSolicitudArgs<ExtArgs>
    _count?: boolean | TipoArticuloPersonalizadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoArticuloPersonalizado"]>

  export type TipoArticuloPersonalizadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    solicitudId?: boolean
    creadoEn?: boolean
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoArticuloPersonalizado"]>

  export type TipoArticuloPersonalizadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    solicitudId?: boolean
    creadoEn?: boolean
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoArticuloPersonalizado"]>

  export type TipoArticuloPersonalizadoSelectScalar = {
    id?: boolean
    nombre?: boolean
    solicitudId?: boolean
    creadoEn?: boolean
  }

  export type TipoArticuloPersonalizadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "solicitudId" | "creadoEn", ExtArgs["result"]["tipoArticuloPersonalizado"]>
  export type TipoArticuloPersonalizadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
    ArticuloSolicitud?: boolean | TipoArticuloPersonalizado$ArticuloSolicitudArgs<ExtArgs>
    _count?: boolean | TipoArticuloPersonalizadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoArticuloPersonalizadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
  }
  export type TipoArticuloPersonalizadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
  }

  export type $TipoArticuloPersonalizadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoArticuloPersonalizado"
    objects: {
      solicitud: Prisma.$SolicitudPayload<ExtArgs>
      ArticuloSolicitud: Prisma.$ArticuloSolicitudPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      solicitudId: number
      creadoEn: Date
    }, ExtArgs["result"]["tipoArticuloPersonalizado"]>
    composites: {}
  }

  type TipoArticuloPersonalizadoGetPayload<S extends boolean | null | undefined | TipoArticuloPersonalizadoDefaultArgs> = $Result.GetResult<Prisma.$TipoArticuloPersonalizadoPayload, S>

  type TipoArticuloPersonalizadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoArticuloPersonalizadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoArticuloPersonalizadoCountAggregateInputType | true
    }

  export interface TipoArticuloPersonalizadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoArticuloPersonalizado'], meta: { name: 'TipoArticuloPersonalizado' } }
    /**
     * Find zero or one TipoArticuloPersonalizado that matches the filter.
     * @param {TipoArticuloPersonalizadoFindUniqueArgs} args - Arguments to find a TipoArticuloPersonalizado
     * @example
     * // Get one TipoArticuloPersonalizado
     * const tipoArticuloPersonalizado = await prisma.tipoArticuloPersonalizado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoArticuloPersonalizadoFindUniqueArgs>(args: SelectSubset<T, TipoArticuloPersonalizadoFindUniqueArgs<ExtArgs>>): Prisma__TipoArticuloPersonalizadoClient<$Result.GetResult<Prisma.$TipoArticuloPersonalizadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoArticuloPersonalizado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoArticuloPersonalizadoFindUniqueOrThrowArgs} args - Arguments to find a TipoArticuloPersonalizado
     * @example
     * // Get one TipoArticuloPersonalizado
     * const tipoArticuloPersonalizado = await prisma.tipoArticuloPersonalizado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoArticuloPersonalizadoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoArticuloPersonalizadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoArticuloPersonalizadoClient<$Result.GetResult<Prisma.$TipoArticuloPersonalizadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoArticuloPersonalizado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloPersonalizadoFindFirstArgs} args - Arguments to find a TipoArticuloPersonalizado
     * @example
     * // Get one TipoArticuloPersonalizado
     * const tipoArticuloPersonalizado = await prisma.tipoArticuloPersonalizado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoArticuloPersonalizadoFindFirstArgs>(args?: SelectSubset<T, TipoArticuloPersonalizadoFindFirstArgs<ExtArgs>>): Prisma__TipoArticuloPersonalizadoClient<$Result.GetResult<Prisma.$TipoArticuloPersonalizadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoArticuloPersonalizado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloPersonalizadoFindFirstOrThrowArgs} args - Arguments to find a TipoArticuloPersonalizado
     * @example
     * // Get one TipoArticuloPersonalizado
     * const tipoArticuloPersonalizado = await prisma.tipoArticuloPersonalizado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoArticuloPersonalizadoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoArticuloPersonalizadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoArticuloPersonalizadoClient<$Result.GetResult<Prisma.$TipoArticuloPersonalizadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoArticuloPersonalizados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloPersonalizadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoArticuloPersonalizados
     * const tipoArticuloPersonalizados = await prisma.tipoArticuloPersonalizado.findMany()
     * 
     * // Get first 10 TipoArticuloPersonalizados
     * const tipoArticuloPersonalizados = await prisma.tipoArticuloPersonalizado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoArticuloPersonalizadoWithIdOnly = await prisma.tipoArticuloPersonalizado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoArticuloPersonalizadoFindManyArgs>(args?: SelectSubset<T, TipoArticuloPersonalizadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoArticuloPersonalizadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoArticuloPersonalizado.
     * @param {TipoArticuloPersonalizadoCreateArgs} args - Arguments to create a TipoArticuloPersonalizado.
     * @example
     * // Create one TipoArticuloPersonalizado
     * const TipoArticuloPersonalizado = await prisma.tipoArticuloPersonalizado.create({
     *   data: {
     *     // ... data to create a TipoArticuloPersonalizado
     *   }
     * })
     * 
     */
    create<T extends TipoArticuloPersonalizadoCreateArgs>(args: SelectSubset<T, TipoArticuloPersonalizadoCreateArgs<ExtArgs>>): Prisma__TipoArticuloPersonalizadoClient<$Result.GetResult<Prisma.$TipoArticuloPersonalizadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoArticuloPersonalizados.
     * @param {TipoArticuloPersonalizadoCreateManyArgs} args - Arguments to create many TipoArticuloPersonalizados.
     * @example
     * // Create many TipoArticuloPersonalizados
     * const tipoArticuloPersonalizado = await prisma.tipoArticuloPersonalizado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoArticuloPersonalizadoCreateManyArgs>(args?: SelectSubset<T, TipoArticuloPersonalizadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoArticuloPersonalizados and returns the data saved in the database.
     * @param {TipoArticuloPersonalizadoCreateManyAndReturnArgs} args - Arguments to create many TipoArticuloPersonalizados.
     * @example
     * // Create many TipoArticuloPersonalizados
     * const tipoArticuloPersonalizado = await prisma.tipoArticuloPersonalizado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoArticuloPersonalizados and only return the `id`
     * const tipoArticuloPersonalizadoWithIdOnly = await prisma.tipoArticuloPersonalizado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoArticuloPersonalizadoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoArticuloPersonalizadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoArticuloPersonalizadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoArticuloPersonalizado.
     * @param {TipoArticuloPersonalizadoDeleteArgs} args - Arguments to delete one TipoArticuloPersonalizado.
     * @example
     * // Delete one TipoArticuloPersonalizado
     * const TipoArticuloPersonalizado = await prisma.tipoArticuloPersonalizado.delete({
     *   where: {
     *     // ... filter to delete one TipoArticuloPersonalizado
     *   }
     * })
     * 
     */
    delete<T extends TipoArticuloPersonalizadoDeleteArgs>(args: SelectSubset<T, TipoArticuloPersonalizadoDeleteArgs<ExtArgs>>): Prisma__TipoArticuloPersonalizadoClient<$Result.GetResult<Prisma.$TipoArticuloPersonalizadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoArticuloPersonalizado.
     * @param {TipoArticuloPersonalizadoUpdateArgs} args - Arguments to update one TipoArticuloPersonalizado.
     * @example
     * // Update one TipoArticuloPersonalizado
     * const tipoArticuloPersonalizado = await prisma.tipoArticuloPersonalizado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoArticuloPersonalizadoUpdateArgs>(args: SelectSubset<T, TipoArticuloPersonalizadoUpdateArgs<ExtArgs>>): Prisma__TipoArticuloPersonalizadoClient<$Result.GetResult<Prisma.$TipoArticuloPersonalizadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoArticuloPersonalizados.
     * @param {TipoArticuloPersonalizadoDeleteManyArgs} args - Arguments to filter TipoArticuloPersonalizados to delete.
     * @example
     * // Delete a few TipoArticuloPersonalizados
     * const { count } = await prisma.tipoArticuloPersonalizado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoArticuloPersonalizadoDeleteManyArgs>(args?: SelectSubset<T, TipoArticuloPersonalizadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoArticuloPersonalizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloPersonalizadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoArticuloPersonalizados
     * const tipoArticuloPersonalizado = await prisma.tipoArticuloPersonalizado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoArticuloPersonalizadoUpdateManyArgs>(args: SelectSubset<T, TipoArticuloPersonalizadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoArticuloPersonalizados and returns the data updated in the database.
     * @param {TipoArticuloPersonalizadoUpdateManyAndReturnArgs} args - Arguments to update many TipoArticuloPersonalizados.
     * @example
     * // Update many TipoArticuloPersonalizados
     * const tipoArticuloPersonalizado = await prisma.tipoArticuloPersonalizado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoArticuloPersonalizados and only return the `id`
     * const tipoArticuloPersonalizadoWithIdOnly = await prisma.tipoArticuloPersonalizado.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoArticuloPersonalizadoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoArticuloPersonalizadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoArticuloPersonalizadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoArticuloPersonalizado.
     * @param {TipoArticuloPersonalizadoUpsertArgs} args - Arguments to update or create a TipoArticuloPersonalizado.
     * @example
     * // Update or create a TipoArticuloPersonalizado
     * const tipoArticuloPersonalizado = await prisma.tipoArticuloPersonalizado.upsert({
     *   create: {
     *     // ... data to create a TipoArticuloPersonalizado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoArticuloPersonalizado we want to update
     *   }
     * })
     */
    upsert<T extends TipoArticuloPersonalizadoUpsertArgs>(args: SelectSubset<T, TipoArticuloPersonalizadoUpsertArgs<ExtArgs>>): Prisma__TipoArticuloPersonalizadoClient<$Result.GetResult<Prisma.$TipoArticuloPersonalizadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoArticuloPersonalizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloPersonalizadoCountArgs} args - Arguments to filter TipoArticuloPersonalizados to count.
     * @example
     * // Count the number of TipoArticuloPersonalizados
     * const count = await prisma.tipoArticuloPersonalizado.count({
     *   where: {
     *     // ... the filter for the TipoArticuloPersonalizados we want to count
     *   }
     * })
    **/
    count<T extends TipoArticuloPersonalizadoCountArgs>(
      args?: Subset<T, TipoArticuloPersonalizadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoArticuloPersonalizadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoArticuloPersonalizado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloPersonalizadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoArticuloPersonalizadoAggregateArgs>(args: Subset<T, TipoArticuloPersonalizadoAggregateArgs>): Prisma.PrismaPromise<GetTipoArticuloPersonalizadoAggregateType<T>>

    /**
     * Group by TipoArticuloPersonalizado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloPersonalizadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoArticuloPersonalizadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoArticuloPersonalizadoGroupByArgs['orderBy'] }
        : { orderBy?: TipoArticuloPersonalizadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoArticuloPersonalizadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoArticuloPersonalizadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoArticuloPersonalizado model
   */
  readonly fields: TipoArticuloPersonalizadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoArticuloPersonalizado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoArticuloPersonalizadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    solicitud<T extends SolicitudDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SolicitudDefaultArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ArticuloSolicitud<T extends TipoArticuloPersonalizado$ArticuloSolicitudArgs<ExtArgs> = {}>(args?: Subset<T, TipoArticuloPersonalizado$ArticuloSolicitudArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoArticuloPersonalizado model
   */ 
  interface TipoArticuloPersonalizadoFieldRefs {
    readonly id: FieldRef<"TipoArticuloPersonalizado", 'Int'>
    readonly nombre: FieldRef<"TipoArticuloPersonalizado", 'String'>
    readonly solicitudId: FieldRef<"TipoArticuloPersonalizado", 'Int'>
    readonly creadoEn: FieldRef<"TipoArticuloPersonalizado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipoArticuloPersonalizado findUnique
   */
  export type TipoArticuloPersonalizadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloPersonalizado
     */
    select?: TipoArticuloPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticuloPersonalizado
     */
    omit?: TipoArticuloPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloPersonalizadoInclude<ExtArgs> | null
    /**
     * Filter, which TipoArticuloPersonalizado to fetch.
     */
    where: TipoArticuloPersonalizadoWhereUniqueInput
  }

  /**
   * TipoArticuloPersonalizado findUniqueOrThrow
   */
  export type TipoArticuloPersonalizadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloPersonalizado
     */
    select?: TipoArticuloPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticuloPersonalizado
     */
    omit?: TipoArticuloPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloPersonalizadoInclude<ExtArgs> | null
    /**
     * Filter, which TipoArticuloPersonalizado to fetch.
     */
    where: TipoArticuloPersonalizadoWhereUniqueInput
  }

  /**
   * TipoArticuloPersonalizado findFirst
   */
  export type TipoArticuloPersonalizadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloPersonalizado
     */
    select?: TipoArticuloPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticuloPersonalizado
     */
    omit?: TipoArticuloPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloPersonalizadoInclude<ExtArgs> | null
    /**
     * Filter, which TipoArticuloPersonalizado to fetch.
     */
    where?: TipoArticuloPersonalizadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoArticuloPersonalizados to fetch.
     */
    orderBy?: TipoArticuloPersonalizadoOrderByWithRelationInput | TipoArticuloPersonalizadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoArticuloPersonalizados.
     */
    cursor?: TipoArticuloPersonalizadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoArticuloPersonalizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoArticuloPersonalizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoArticuloPersonalizados.
     */
    distinct?: TipoArticuloPersonalizadoScalarFieldEnum | TipoArticuloPersonalizadoScalarFieldEnum[]
  }

  /**
   * TipoArticuloPersonalizado findFirstOrThrow
   */
  export type TipoArticuloPersonalizadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloPersonalizado
     */
    select?: TipoArticuloPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticuloPersonalizado
     */
    omit?: TipoArticuloPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloPersonalizadoInclude<ExtArgs> | null
    /**
     * Filter, which TipoArticuloPersonalizado to fetch.
     */
    where?: TipoArticuloPersonalizadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoArticuloPersonalizados to fetch.
     */
    orderBy?: TipoArticuloPersonalizadoOrderByWithRelationInput | TipoArticuloPersonalizadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoArticuloPersonalizados.
     */
    cursor?: TipoArticuloPersonalizadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoArticuloPersonalizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoArticuloPersonalizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoArticuloPersonalizados.
     */
    distinct?: TipoArticuloPersonalizadoScalarFieldEnum | TipoArticuloPersonalizadoScalarFieldEnum[]
  }

  /**
   * TipoArticuloPersonalizado findMany
   */
  export type TipoArticuloPersonalizadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloPersonalizado
     */
    select?: TipoArticuloPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticuloPersonalizado
     */
    omit?: TipoArticuloPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloPersonalizadoInclude<ExtArgs> | null
    /**
     * Filter, which TipoArticuloPersonalizados to fetch.
     */
    where?: TipoArticuloPersonalizadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoArticuloPersonalizados to fetch.
     */
    orderBy?: TipoArticuloPersonalizadoOrderByWithRelationInput | TipoArticuloPersonalizadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoArticuloPersonalizados.
     */
    cursor?: TipoArticuloPersonalizadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoArticuloPersonalizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoArticuloPersonalizados.
     */
    skip?: number
    distinct?: TipoArticuloPersonalizadoScalarFieldEnum | TipoArticuloPersonalizadoScalarFieldEnum[]
  }

  /**
   * TipoArticuloPersonalizado create
   */
  export type TipoArticuloPersonalizadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloPersonalizado
     */
    select?: TipoArticuloPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticuloPersonalizado
     */
    omit?: TipoArticuloPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloPersonalizadoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoArticuloPersonalizado.
     */
    data: XOR<TipoArticuloPersonalizadoCreateInput, TipoArticuloPersonalizadoUncheckedCreateInput>
  }

  /**
   * TipoArticuloPersonalizado createMany
   */
  export type TipoArticuloPersonalizadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoArticuloPersonalizados.
     */
    data: TipoArticuloPersonalizadoCreateManyInput | TipoArticuloPersonalizadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoArticuloPersonalizado createManyAndReturn
   */
  export type TipoArticuloPersonalizadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloPersonalizado
     */
    select?: TipoArticuloPersonalizadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticuloPersonalizado
     */
    omit?: TipoArticuloPersonalizadoOmit<ExtArgs> | null
    /**
     * The data used to create many TipoArticuloPersonalizados.
     */
    data: TipoArticuloPersonalizadoCreateManyInput | TipoArticuloPersonalizadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloPersonalizadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TipoArticuloPersonalizado update
   */
  export type TipoArticuloPersonalizadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloPersonalizado
     */
    select?: TipoArticuloPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticuloPersonalizado
     */
    omit?: TipoArticuloPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloPersonalizadoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoArticuloPersonalizado.
     */
    data: XOR<TipoArticuloPersonalizadoUpdateInput, TipoArticuloPersonalizadoUncheckedUpdateInput>
    /**
     * Choose, which TipoArticuloPersonalizado to update.
     */
    where: TipoArticuloPersonalizadoWhereUniqueInput
  }

  /**
   * TipoArticuloPersonalizado updateMany
   */
  export type TipoArticuloPersonalizadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoArticuloPersonalizados.
     */
    data: XOR<TipoArticuloPersonalizadoUpdateManyMutationInput, TipoArticuloPersonalizadoUncheckedUpdateManyInput>
    /**
     * Filter which TipoArticuloPersonalizados to update
     */
    where?: TipoArticuloPersonalizadoWhereInput
    /**
     * Limit how many TipoArticuloPersonalizados to update.
     */
    limit?: number
  }

  /**
   * TipoArticuloPersonalizado updateManyAndReturn
   */
  export type TipoArticuloPersonalizadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloPersonalizado
     */
    select?: TipoArticuloPersonalizadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticuloPersonalizado
     */
    omit?: TipoArticuloPersonalizadoOmit<ExtArgs> | null
    /**
     * The data used to update TipoArticuloPersonalizados.
     */
    data: XOR<TipoArticuloPersonalizadoUpdateManyMutationInput, TipoArticuloPersonalizadoUncheckedUpdateManyInput>
    /**
     * Filter which TipoArticuloPersonalizados to update
     */
    where?: TipoArticuloPersonalizadoWhereInput
    /**
     * Limit how many TipoArticuloPersonalizados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloPersonalizadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TipoArticuloPersonalizado upsert
   */
  export type TipoArticuloPersonalizadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloPersonalizado
     */
    select?: TipoArticuloPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticuloPersonalizado
     */
    omit?: TipoArticuloPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloPersonalizadoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoArticuloPersonalizado to update in case it exists.
     */
    where: TipoArticuloPersonalizadoWhereUniqueInput
    /**
     * In case the TipoArticuloPersonalizado found by the `where` argument doesn't exist, create a new TipoArticuloPersonalizado with this data.
     */
    create: XOR<TipoArticuloPersonalizadoCreateInput, TipoArticuloPersonalizadoUncheckedCreateInput>
    /**
     * In case the TipoArticuloPersonalizado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoArticuloPersonalizadoUpdateInput, TipoArticuloPersonalizadoUncheckedUpdateInput>
  }

  /**
   * TipoArticuloPersonalizado delete
   */
  export type TipoArticuloPersonalizadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloPersonalizado
     */
    select?: TipoArticuloPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticuloPersonalizado
     */
    omit?: TipoArticuloPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloPersonalizadoInclude<ExtArgs> | null
    /**
     * Filter which TipoArticuloPersonalizado to delete.
     */
    where: TipoArticuloPersonalizadoWhereUniqueInput
  }

  /**
   * TipoArticuloPersonalizado deleteMany
   */
  export type TipoArticuloPersonalizadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoArticuloPersonalizados to delete
     */
    where?: TipoArticuloPersonalizadoWhereInput
    /**
     * Limit how many TipoArticuloPersonalizados to delete.
     */
    limit?: number
  }

  /**
   * TipoArticuloPersonalizado.ArticuloSolicitud
   */
  export type TipoArticuloPersonalizado$ArticuloSolicitudArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    where?: ArticuloSolicitudWhereInput
    orderBy?: ArticuloSolicitudOrderByWithRelationInput | ArticuloSolicitudOrderByWithRelationInput[]
    cursor?: ArticuloSolicitudWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticuloSolicitudScalarFieldEnum | ArticuloSolicitudScalarFieldEnum[]
  }

  /**
   * TipoArticuloPersonalizado without action
   */
  export type TipoArticuloPersonalizadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloPersonalizado
     */
    select?: TipoArticuloPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticuloPersonalizado
     */
    omit?: TipoArticuloPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloPersonalizadoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TipoArticuloScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    creadoEn: 'creadoEn'
  };

  export type TipoArticuloScalarFieldEnum = (typeof TipoArticuloScalarFieldEnum)[keyof typeof TipoArticuloScalarFieldEnum]


  export const PuntoDonacionScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    direccion: 'direccion',
    responsable: 'responsable',
    telefono: 'telefono',
    latitud: 'latitud',
    longitud: 'longitud',
    horarioApertura: 'horarioApertura',
    horarioCierre: 'horarioCierre',
    descripcion: 'descripcion',
    activo: 'activo',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type PuntoDonacionScalarFieldEnum = (typeof PuntoDonacionScalarFieldEnum)[keyof typeof PuntoDonacionScalarFieldEnum]


  export const ArticuloOfertaScalarFieldEnum: {
    id: 'id',
    puntoDonacionId: 'puntoDonacionId',
    tipoArticuloId: 'tipoArticuloId',
    cantidad: 'cantidad',
    estado: 'estado',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type ArticuloOfertaScalarFieldEnum = (typeof ArticuloOfertaScalarFieldEnum)[keyof typeof ArticuloOfertaScalarFieldEnum]


  export const SolicitudScalarFieldEnum: {
    id: 'id',
    direccion: 'direccion',
    contactoNombre: 'contactoNombre',
    contactoTel: 'contactoTel',
    estado: 'estado',
    latitud: 'latitud',
    longitud: 'longitud',
    descripcion: 'descripcion',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type SolicitudScalarFieldEnum = (typeof SolicitudScalarFieldEnum)[keyof typeof SolicitudScalarFieldEnum]


  export const ArticuloSolicitudScalarFieldEnum: {
    id: 'id',
    solicitudId: 'solicitudId',
    tipoArticuloId: 'tipoArticuloId',
    tipoArticuloPersonalizadoId: 'tipoArticuloPersonalizadoId',
    cantidad: 'cantidad',
    creadoEn: 'creadoEn'
  };

  export type ArticuloSolicitudScalarFieldEnum = (typeof ArticuloSolicitudScalarFieldEnum)[keyof typeof ArticuloSolicitudScalarFieldEnum]


  export const PeticionDonacionScalarFieldEnum: {
    id: 'id',
    direccion: 'direccion',
    contactoNombre: 'contactoNombre',
    contactoTel: 'contactoTel',
    latitud: 'latitud',
    longitud: 'longitud',
    descripcion: 'descripcion',
    estado: 'estado',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type PeticionDonacionScalarFieldEnum = (typeof PeticionDonacionScalarFieldEnum)[keyof typeof PeticionDonacionScalarFieldEnum]


  export const ArticuloPeticionScalarFieldEnum: {
    id: 'id',
    peticionDonacionId: 'peticionDonacionId',
    tipoArticuloId: 'tipoArticuloId',
    cantidad: 'cantidad',
    creadoEn: 'creadoEn'
  };

  export type ArticuloPeticionScalarFieldEnum = (typeof ArticuloPeticionScalarFieldEnum)[keyof typeof ArticuloPeticionScalarFieldEnum]


  export const SolicitudLimpiezaScalarFieldEnum: {
    id: 'id',
    direccion: 'direccion',
    contactoNombre: 'contactoNombre',
    contactoTel: 'contactoTel',
    estado: 'estado',
    latitud: 'latitud',
    longitud: 'longitud',
    descripcion: 'descripcion',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type SolicitudLimpiezaScalarFieldEnum = (typeof SolicitudLimpiezaScalarFieldEnum)[keyof typeof SolicitudLimpiezaScalarFieldEnum]


  export const MensajeContactoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    telefono: 'telefono',
    mensaje: 'mensaje',
    leido: 'leido',
    creadoEn: 'creadoEn'
  };

  export type MensajeContactoScalarFieldEnum = (typeof MensajeContactoScalarFieldEnum)[keyof typeof MensajeContactoScalarFieldEnum]


  export const InformacionUtilScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    telefono: 'telefono',
    direccion: 'direccion',
    horario: 'horario',
    descripcion: 'descripcion',
    leido: 'leido',
    creadoEn: 'creadoEn'
  };

  export type InformacionUtilScalarFieldEnum = (typeof InformacionUtilScalarFieldEnum)[keyof typeof InformacionUtilScalarFieldEnum]


  export const MensajeScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    telefono: 'telefono',
    mensaje: 'mensaje',
    leido: 'leido',
    creadoEn: 'creadoEn'
  };

  export type MensajeScalarFieldEnum = (typeof MensajeScalarFieldEnum)[keyof typeof MensajeScalarFieldEnum]


  export const TipoArticuloPersonalizadoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    solicitudId: 'solicitudId',
    creadoEn: 'creadoEn'
  };

  export type TipoArticuloPersonalizadoScalarFieldEnum = (typeof TipoArticuloPersonalizadoScalarFieldEnum)[keyof typeof TipoArticuloPersonalizadoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type TipoArticuloWhereInput = {
    AND?: TipoArticuloWhereInput | TipoArticuloWhereInput[]
    OR?: TipoArticuloWhereInput[]
    NOT?: TipoArticuloWhereInput | TipoArticuloWhereInput[]
    id?: IntFilter<"TipoArticulo"> | number
    nombre?: StringFilter<"TipoArticulo"> | string
    creadoEn?: DateTimeFilter<"TipoArticulo"> | Date | string
    articulosOferta?: ArticuloOfertaListRelationFilter
    articulosPeticion?: ArticuloPeticionListRelationFilter
    articulosSolicitud?: ArticuloSolicitudListRelationFilter
  }

  export type TipoArticuloOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
    articulosOferta?: ArticuloOfertaOrderByRelationAggregateInput
    articulosPeticion?: ArticuloPeticionOrderByRelationAggregateInput
    articulosSolicitud?: ArticuloSolicitudOrderByRelationAggregateInput
  }

  export type TipoArticuloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: TipoArticuloWhereInput | TipoArticuloWhereInput[]
    OR?: TipoArticuloWhereInput[]
    NOT?: TipoArticuloWhereInput | TipoArticuloWhereInput[]
    creadoEn?: DateTimeFilter<"TipoArticulo"> | Date | string
    articulosOferta?: ArticuloOfertaListRelationFilter
    articulosPeticion?: ArticuloPeticionListRelationFilter
    articulosSolicitud?: ArticuloSolicitudListRelationFilter
  }, "id" | "nombre">

  export type TipoArticuloOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
    _count?: TipoArticuloCountOrderByAggregateInput
    _avg?: TipoArticuloAvgOrderByAggregateInput
    _max?: TipoArticuloMaxOrderByAggregateInput
    _min?: TipoArticuloMinOrderByAggregateInput
    _sum?: TipoArticuloSumOrderByAggregateInput
  }

  export type TipoArticuloScalarWhereWithAggregatesInput = {
    AND?: TipoArticuloScalarWhereWithAggregatesInput | TipoArticuloScalarWhereWithAggregatesInput[]
    OR?: TipoArticuloScalarWhereWithAggregatesInput[]
    NOT?: TipoArticuloScalarWhereWithAggregatesInput | TipoArticuloScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoArticulo"> | number
    nombre?: StringWithAggregatesFilter<"TipoArticulo"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"TipoArticulo"> | Date | string
  }

  export type PuntoDonacionWhereInput = {
    AND?: PuntoDonacionWhereInput | PuntoDonacionWhereInput[]
    OR?: PuntoDonacionWhereInput[]
    NOT?: PuntoDonacionWhereInput | PuntoDonacionWhereInput[]
    id?: IntFilter<"PuntoDonacion"> | number
    nombre?: StringNullableFilter<"PuntoDonacion"> | string | null
    direccion?: StringFilter<"PuntoDonacion"> | string
    responsable?: StringFilter<"PuntoDonacion"> | string
    telefono?: StringNullableFilter<"PuntoDonacion"> | string | null
    latitud?: FloatFilter<"PuntoDonacion"> | number
    longitud?: FloatFilter<"PuntoDonacion"> | number
    horarioApertura?: StringNullableFilter<"PuntoDonacion"> | string | null
    horarioCierre?: StringNullableFilter<"PuntoDonacion"> | string | null
    descripcion?: StringNullableFilter<"PuntoDonacion"> | string | null
    activo?: BoolFilter<"PuntoDonacion"> | boolean
    creadoEn?: DateTimeFilter<"PuntoDonacion"> | Date | string
    actualizadoEn?: DateTimeFilter<"PuntoDonacion"> | Date | string
    articulos?: ArticuloOfertaListRelationFilter
  }

  export type PuntoDonacionOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    direccion?: SortOrder
    responsable?: SortOrder
    telefono?: SortOrderInput | SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    horarioApertura?: SortOrderInput | SortOrder
    horarioCierre?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    articulos?: ArticuloOfertaOrderByRelationAggregateInput
  }

  export type PuntoDonacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PuntoDonacionWhereInput | PuntoDonacionWhereInput[]
    OR?: PuntoDonacionWhereInput[]
    NOT?: PuntoDonacionWhereInput | PuntoDonacionWhereInput[]
    nombre?: StringNullableFilter<"PuntoDonacion"> | string | null
    direccion?: StringFilter<"PuntoDonacion"> | string
    responsable?: StringFilter<"PuntoDonacion"> | string
    telefono?: StringNullableFilter<"PuntoDonacion"> | string | null
    latitud?: FloatFilter<"PuntoDonacion"> | number
    longitud?: FloatFilter<"PuntoDonacion"> | number
    horarioApertura?: StringNullableFilter<"PuntoDonacion"> | string | null
    horarioCierre?: StringNullableFilter<"PuntoDonacion"> | string | null
    descripcion?: StringNullableFilter<"PuntoDonacion"> | string | null
    activo?: BoolFilter<"PuntoDonacion"> | boolean
    creadoEn?: DateTimeFilter<"PuntoDonacion"> | Date | string
    actualizadoEn?: DateTimeFilter<"PuntoDonacion"> | Date | string
    articulos?: ArticuloOfertaListRelationFilter
  }, "id">

  export type PuntoDonacionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    direccion?: SortOrder
    responsable?: SortOrder
    telefono?: SortOrderInput | SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    horarioApertura?: SortOrderInput | SortOrder
    horarioCierre?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: PuntoDonacionCountOrderByAggregateInput
    _avg?: PuntoDonacionAvgOrderByAggregateInput
    _max?: PuntoDonacionMaxOrderByAggregateInput
    _min?: PuntoDonacionMinOrderByAggregateInput
    _sum?: PuntoDonacionSumOrderByAggregateInput
  }

  export type PuntoDonacionScalarWhereWithAggregatesInput = {
    AND?: PuntoDonacionScalarWhereWithAggregatesInput | PuntoDonacionScalarWhereWithAggregatesInput[]
    OR?: PuntoDonacionScalarWhereWithAggregatesInput[]
    NOT?: PuntoDonacionScalarWhereWithAggregatesInput | PuntoDonacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PuntoDonacion"> | number
    nombre?: StringNullableWithAggregatesFilter<"PuntoDonacion"> | string | null
    direccion?: StringWithAggregatesFilter<"PuntoDonacion"> | string
    responsable?: StringWithAggregatesFilter<"PuntoDonacion"> | string
    telefono?: StringNullableWithAggregatesFilter<"PuntoDonacion"> | string | null
    latitud?: FloatWithAggregatesFilter<"PuntoDonacion"> | number
    longitud?: FloatWithAggregatesFilter<"PuntoDonacion"> | number
    horarioApertura?: StringNullableWithAggregatesFilter<"PuntoDonacion"> | string | null
    horarioCierre?: StringNullableWithAggregatesFilter<"PuntoDonacion"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"PuntoDonacion"> | string | null
    activo?: BoolWithAggregatesFilter<"PuntoDonacion"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"PuntoDonacion"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"PuntoDonacion"> | Date | string
  }

  export type ArticuloOfertaWhereInput = {
    AND?: ArticuloOfertaWhereInput | ArticuloOfertaWhereInput[]
    OR?: ArticuloOfertaWhereInput[]
    NOT?: ArticuloOfertaWhereInput | ArticuloOfertaWhereInput[]
    id?: IntFilter<"ArticuloOferta"> | number
    puntoDonacionId?: IntFilter<"ArticuloOferta"> | number
    tipoArticuloId?: IntFilter<"ArticuloOferta"> | number
    cantidad?: IntNullableFilter<"ArticuloOferta"> | number | null
    estado?: StringFilter<"ArticuloOferta"> | string
    creadoEn?: DateTimeFilter<"ArticuloOferta"> | Date | string
    actualizadoEn?: DateTimeFilter<"ArticuloOferta"> | Date | string
    puntoDonacion?: XOR<PuntoDonacionScalarRelationFilter, PuntoDonacionWhereInput>
    tipoArticulo?: XOR<TipoArticuloScalarRelationFilter, TipoArticuloWhereInput>
  }

  export type ArticuloOfertaOrderByWithRelationInput = {
    id?: SortOrder
    puntoDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrderInput | SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    puntoDonacion?: PuntoDonacionOrderByWithRelationInput
    tipoArticulo?: TipoArticuloOrderByWithRelationInput
  }

  export type ArticuloOfertaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    puntoDonacionId_tipoArticuloId?: ArticuloOfertaPuntoDonacionIdTipoArticuloIdCompoundUniqueInput
    AND?: ArticuloOfertaWhereInput | ArticuloOfertaWhereInput[]
    OR?: ArticuloOfertaWhereInput[]
    NOT?: ArticuloOfertaWhereInput | ArticuloOfertaWhereInput[]
    puntoDonacionId?: IntFilter<"ArticuloOferta"> | number
    tipoArticuloId?: IntFilter<"ArticuloOferta"> | number
    cantidad?: IntNullableFilter<"ArticuloOferta"> | number | null
    estado?: StringFilter<"ArticuloOferta"> | string
    creadoEn?: DateTimeFilter<"ArticuloOferta"> | Date | string
    actualizadoEn?: DateTimeFilter<"ArticuloOferta"> | Date | string
    puntoDonacion?: XOR<PuntoDonacionScalarRelationFilter, PuntoDonacionWhereInput>
    tipoArticulo?: XOR<TipoArticuloScalarRelationFilter, TipoArticuloWhereInput>
  }, "id" | "puntoDonacionId_tipoArticuloId">

  export type ArticuloOfertaOrderByWithAggregationInput = {
    id?: SortOrder
    puntoDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrderInput | SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: ArticuloOfertaCountOrderByAggregateInput
    _avg?: ArticuloOfertaAvgOrderByAggregateInput
    _max?: ArticuloOfertaMaxOrderByAggregateInput
    _min?: ArticuloOfertaMinOrderByAggregateInput
    _sum?: ArticuloOfertaSumOrderByAggregateInput
  }

  export type ArticuloOfertaScalarWhereWithAggregatesInput = {
    AND?: ArticuloOfertaScalarWhereWithAggregatesInput | ArticuloOfertaScalarWhereWithAggregatesInput[]
    OR?: ArticuloOfertaScalarWhereWithAggregatesInput[]
    NOT?: ArticuloOfertaScalarWhereWithAggregatesInput | ArticuloOfertaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ArticuloOferta"> | number
    puntoDonacionId?: IntWithAggregatesFilter<"ArticuloOferta"> | number
    tipoArticuloId?: IntWithAggregatesFilter<"ArticuloOferta"> | number
    cantidad?: IntNullableWithAggregatesFilter<"ArticuloOferta"> | number | null
    estado?: StringWithAggregatesFilter<"ArticuloOferta"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"ArticuloOferta"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"ArticuloOferta"> | Date | string
  }

  export type SolicitudWhereInput = {
    AND?: SolicitudWhereInput | SolicitudWhereInput[]
    OR?: SolicitudWhereInput[]
    NOT?: SolicitudWhereInput | SolicitudWhereInput[]
    id?: IntFilter<"Solicitud"> | number
    direccion?: StringFilter<"Solicitud"> | string
    contactoNombre?: StringFilter<"Solicitud"> | string
    contactoTel?: StringFilter<"Solicitud"> | string
    estado?: StringFilter<"Solicitud"> | string
    latitud?: FloatFilter<"Solicitud"> | number
    longitud?: FloatFilter<"Solicitud"> | number
    descripcion?: StringNullableFilter<"Solicitud"> | string | null
    creadoEn?: DateTimeFilter<"Solicitud"> | Date | string
    actualizadoEn?: DateTimeFilter<"Solicitud"> | Date | string
    articulos?: ArticuloSolicitudListRelationFilter
    tiposArticuloPersonalizados?: TipoArticuloPersonalizadoListRelationFilter
  }

  export type SolicitudOrderByWithRelationInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    articulos?: ArticuloSolicitudOrderByRelationAggregateInput
    tiposArticuloPersonalizados?: TipoArticuloPersonalizadoOrderByRelationAggregateInput
  }

  export type SolicitudWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SolicitudWhereInput | SolicitudWhereInput[]
    OR?: SolicitudWhereInput[]
    NOT?: SolicitudWhereInput | SolicitudWhereInput[]
    direccion?: StringFilter<"Solicitud"> | string
    contactoNombre?: StringFilter<"Solicitud"> | string
    contactoTel?: StringFilter<"Solicitud"> | string
    estado?: StringFilter<"Solicitud"> | string
    latitud?: FloatFilter<"Solicitud"> | number
    longitud?: FloatFilter<"Solicitud"> | number
    descripcion?: StringNullableFilter<"Solicitud"> | string | null
    creadoEn?: DateTimeFilter<"Solicitud"> | Date | string
    actualizadoEn?: DateTimeFilter<"Solicitud"> | Date | string
    articulos?: ArticuloSolicitudListRelationFilter
    tiposArticuloPersonalizados?: TipoArticuloPersonalizadoListRelationFilter
  }, "id">

  export type SolicitudOrderByWithAggregationInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: SolicitudCountOrderByAggregateInput
    _avg?: SolicitudAvgOrderByAggregateInput
    _max?: SolicitudMaxOrderByAggregateInput
    _min?: SolicitudMinOrderByAggregateInput
    _sum?: SolicitudSumOrderByAggregateInput
  }

  export type SolicitudScalarWhereWithAggregatesInput = {
    AND?: SolicitudScalarWhereWithAggregatesInput | SolicitudScalarWhereWithAggregatesInput[]
    OR?: SolicitudScalarWhereWithAggregatesInput[]
    NOT?: SolicitudScalarWhereWithAggregatesInput | SolicitudScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Solicitud"> | number
    direccion?: StringWithAggregatesFilter<"Solicitud"> | string
    contactoNombre?: StringWithAggregatesFilter<"Solicitud"> | string
    contactoTel?: StringWithAggregatesFilter<"Solicitud"> | string
    estado?: StringWithAggregatesFilter<"Solicitud"> | string
    latitud?: FloatWithAggregatesFilter<"Solicitud"> | number
    longitud?: FloatWithAggregatesFilter<"Solicitud"> | number
    descripcion?: StringNullableWithAggregatesFilter<"Solicitud"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"Solicitud"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Solicitud"> | Date | string
  }

  export type ArticuloSolicitudWhereInput = {
    AND?: ArticuloSolicitudWhereInput | ArticuloSolicitudWhereInput[]
    OR?: ArticuloSolicitudWhereInput[]
    NOT?: ArticuloSolicitudWhereInput | ArticuloSolicitudWhereInput[]
    id?: IntFilter<"ArticuloSolicitud"> | number
    solicitudId?: IntFilter<"ArticuloSolicitud"> | number
    tipoArticuloId?: IntNullableFilter<"ArticuloSolicitud"> | number | null
    tipoArticuloPersonalizadoId?: IntNullableFilter<"ArticuloSolicitud"> | number | null
    cantidad?: IntFilter<"ArticuloSolicitud"> | number
    creadoEn?: DateTimeFilter<"ArticuloSolicitud"> | Date | string
    solicitud?: XOR<SolicitudScalarRelationFilter, SolicitudWhereInput>
    tipoArticulo?: XOR<TipoArticuloNullableScalarRelationFilter, TipoArticuloWhereInput> | null
    tipoArticuloPersonalizado?: XOR<TipoArticuloPersonalizadoNullableScalarRelationFilter, TipoArticuloPersonalizadoWhereInput> | null
  }

  export type ArticuloSolicitudOrderByWithRelationInput = {
    id?: SortOrder
    solicitudId?: SortOrder
    tipoArticuloId?: SortOrderInput | SortOrder
    tipoArticuloPersonalizadoId?: SortOrderInput | SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
    solicitud?: SolicitudOrderByWithRelationInput
    tipoArticulo?: TipoArticuloOrderByWithRelationInput
    tipoArticuloPersonalizado?: TipoArticuloPersonalizadoOrderByWithRelationInput
  }

  export type ArticuloSolicitudWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    solicitudId_tipoArticuloId?: ArticuloSolicitudSolicitudIdTipoArticuloIdCompoundUniqueInput
    solicitudId_tipoArticuloPersonalizadoId?: ArticuloSolicitudSolicitudIdTipoArticuloPersonalizadoIdCompoundUniqueInput
    AND?: ArticuloSolicitudWhereInput | ArticuloSolicitudWhereInput[]
    OR?: ArticuloSolicitudWhereInput[]
    NOT?: ArticuloSolicitudWhereInput | ArticuloSolicitudWhereInput[]
    solicitudId?: IntFilter<"ArticuloSolicitud"> | number
    tipoArticuloId?: IntNullableFilter<"ArticuloSolicitud"> | number | null
    tipoArticuloPersonalizadoId?: IntNullableFilter<"ArticuloSolicitud"> | number | null
    cantidad?: IntFilter<"ArticuloSolicitud"> | number
    creadoEn?: DateTimeFilter<"ArticuloSolicitud"> | Date | string
    solicitud?: XOR<SolicitudScalarRelationFilter, SolicitudWhereInput>
    tipoArticulo?: XOR<TipoArticuloNullableScalarRelationFilter, TipoArticuloWhereInput> | null
    tipoArticuloPersonalizado?: XOR<TipoArticuloPersonalizadoNullableScalarRelationFilter, TipoArticuloPersonalizadoWhereInput> | null
  }, "id" | "solicitudId_tipoArticuloId" | "solicitudId_tipoArticuloPersonalizadoId">

  export type ArticuloSolicitudOrderByWithAggregationInput = {
    id?: SortOrder
    solicitudId?: SortOrder
    tipoArticuloId?: SortOrderInput | SortOrder
    tipoArticuloPersonalizadoId?: SortOrderInput | SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
    _count?: ArticuloSolicitudCountOrderByAggregateInput
    _avg?: ArticuloSolicitudAvgOrderByAggregateInput
    _max?: ArticuloSolicitudMaxOrderByAggregateInput
    _min?: ArticuloSolicitudMinOrderByAggregateInput
    _sum?: ArticuloSolicitudSumOrderByAggregateInput
  }

  export type ArticuloSolicitudScalarWhereWithAggregatesInput = {
    AND?: ArticuloSolicitudScalarWhereWithAggregatesInput | ArticuloSolicitudScalarWhereWithAggregatesInput[]
    OR?: ArticuloSolicitudScalarWhereWithAggregatesInput[]
    NOT?: ArticuloSolicitudScalarWhereWithAggregatesInput | ArticuloSolicitudScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ArticuloSolicitud"> | number
    solicitudId?: IntWithAggregatesFilter<"ArticuloSolicitud"> | number
    tipoArticuloId?: IntNullableWithAggregatesFilter<"ArticuloSolicitud"> | number | null
    tipoArticuloPersonalizadoId?: IntNullableWithAggregatesFilter<"ArticuloSolicitud"> | number | null
    cantidad?: IntWithAggregatesFilter<"ArticuloSolicitud"> | number
    creadoEn?: DateTimeWithAggregatesFilter<"ArticuloSolicitud"> | Date | string
  }

  export type PeticionDonacionWhereInput = {
    AND?: PeticionDonacionWhereInput | PeticionDonacionWhereInput[]
    OR?: PeticionDonacionWhereInput[]
    NOT?: PeticionDonacionWhereInput | PeticionDonacionWhereInput[]
    id?: IntFilter<"PeticionDonacion"> | number
    direccion?: StringFilter<"PeticionDonacion"> | string
    contactoNombre?: StringFilter<"PeticionDonacion"> | string
    contactoTel?: StringFilter<"PeticionDonacion"> | string
    latitud?: FloatNullableFilter<"PeticionDonacion"> | number | null
    longitud?: FloatNullableFilter<"PeticionDonacion"> | number | null
    descripcion?: StringNullableFilter<"PeticionDonacion"> | string | null
    estado?: StringFilter<"PeticionDonacion"> | string
    creadoEn?: DateTimeFilter<"PeticionDonacion"> | Date | string
    actualizadoEn?: DateTimeFilter<"PeticionDonacion"> | Date | string
    articulos?: ArticuloPeticionListRelationFilter
  }

  export type PeticionDonacionOrderByWithRelationInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    latitud?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    articulos?: ArticuloPeticionOrderByRelationAggregateInput
  }

  export type PeticionDonacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PeticionDonacionWhereInput | PeticionDonacionWhereInput[]
    OR?: PeticionDonacionWhereInput[]
    NOT?: PeticionDonacionWhereInput | PeticionDonacionWhereInput[]
    direccion?: StringFilter<"PeticionDonacion"> | string
    contactoNombre?: StringFilter<"PeticionDonacion"> | string
    contactoTel?: StringFilter<"PeticionDonacion"> | string
    latitud?: FloatNullableFilter<"PeticionDonacion"> | number | null
    longitud?: FloatNullableFilter<"PeticionDonacion"> | number | null
    descripcion?: StringNullableFilter<"PeticionDonacion"> | string | null
    estado?: StringFilter<"PeticionDonacion"> | string
    creadoEn?: DateTimeFilter<"PeticionDonacion"> | Date | string
    actualizadoEn?: DateTimeFilter<"PeticionDonacion"> | Date | string
    articulos?: ArticuloPeticionListRelationFilter
  }, "id">

  export type PeticionDonacionOrderByWithAggregationInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    latitud?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: PeticionDonacionCountOrderByAggregateInput
    _avg?: PeticionDonacionAvgOrderByAggregateInput
    _max?: PeticionDonacionMaxOrderByAggregateInput
    _min?: PeticionDonacionMinOrderByAggregateInput
    _sum?: PeticionDonacionSumOrderByAggregateInput
  }

  export type PeticionDonacionScalarWhereWithAggregatesInput = {
    AND?: PeticionDonacionScalarWhereWithAggregatesInput | PeticionDonacionScalarWhereWithAggregatesInput[]
    OR?: PeticionDonacionScalarWhereWithAggregatesInput[]
    NOT?: PeticionDonacionScalarWhereWithAggregatesInput | PeticionDonacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PeticionDonacion"> | number
    direccion?: StringWithAggregatesFilter<"PeticionDonacion"> | string
    contactoNombre?: StringWithAggregatesFilter<"PeticionDonacion"> | string
    contactoTel?: StringWithAggregatesFilter<"PeticionDonacion"> | string
    latitud?: FloatNullableWithAggregatesFilter<"PeticionDonacion"> | number | null
    longitud?: FloatNullableWithAggregatesFilter<"PeticionDonacion"> | number | null
    descripcion?: StringNullableWithAggregatesFilter<"PeticionDonacion"> | string | null
    estado?: StringWithAggregatesFilter<"PeticionDonacion"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"PeticionDonacion"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"PeticionDonacion"> | Date | string
  }

  export type ArticuloPeticionWhereInput = {
    AND?: ArticuloPeticionWhereInput | ArticuloPeticionWhereInput[]
    OR?: ArticuloPeticionWhereInput[]
    NOT?: ArticuloPeticionWhereInput | ArticuloPeticionWhereInput[]
    id?: IntFilter<"ArticuloPeticion"> | number
    peticionDonacionId?: IntFilter<"ArticuloPeticion"> | number
    tipoArticuloId?: IntFilter<"ArticuloPeticion"> | number
    cantidad?: IntFilter<"ArticuloPeticion"> | number
    creadoEn?: DateTimeFilter<"ArticuloPeticion"> | Date | string
    peticionDonacion?: XOR<PeticionDonacionScalarRelationFilter, PeticionDonacionWhereInput>
    tipoArticulo?: XOR<TipoArticuloScalarRelationFilter, TipoArticuloWhereInput>
  }

  export type ArticuloPeticionOrderByWithRelationInput = {
    id?: SortOrder
    peticionDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
    peticionDonacion?: PeticionDonacionOrderByWithRelationInput
    tipoArticulo?: TipoArticuloOrderByWithRelationInput
  }

  export type ArticuloPeticionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    peticionDonacionId_tipoArticuloId?: ArticuloPeticionPeticionDonacionIdTipoArticuloIdCompoundUniqueInput
    AND?: ArticuloPeticionWhereInput | ArticuloPeticionWhereInput[]
    OR?: ArticuloPeticionWhereInput[]
    NOT?: ArticuloPeticionWhereInput | ArticuloPeticionWhereInput[]
    peticionDonacionId?: IntFilter<"ArticuloPeticion"> | number
    tipoArticuloId?: IntFilter<"ArticuloPeticion"> | number
    cantidad?: IntFilter<"ArticuloPeticion"> | number
    creadoEn?: DateTimeFilter<"ArticuloPeticion"> | Date | string
    peticionDonacion?: XOR<PeticionDonacionScalarRelationFilter, PeticionDonacionWhereInput>
    tipoArticulo?: XOR<TipoArticuloScalarRelationFilter, TipoArticuloWhereInput>
  }, "id" | "peticionDonacionId_tipoArticuloId">

  export type ArticuloPeticionOrderByWithAggregationInput = {
    id?: SortOrder
    peticionDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
    _count?: ArticuloPeticionCountOrderByAggregateInput
    _avg?: ArticuloPeticionAvgOrderByAggregateInput
    _max?: ArticuloPeticionMaxOrderByAggregateInput
    _min?: ArticuloPeticionMinOrderByAggregateInput
    _sum?: ArticuloPeticionSumOrderByAggregateInput
  }

  export type ArticuloPeticionScalarWhereWithAggregatesInput = {
    AND?: ArticuloPeticionScalarWhereWithAggregatesInput | ArticuloPeticionScalarWhereWithAggregatesInput[]
    OR?: ArticuloPeticionScalarWhereWithAggregatesInput[]
    NOT?: ArticuloPeticionScalarWhereWithAggregatesInput | ArticuloPeticionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ArticuloPeticion"> | number
    peticionDonacionId?: IntWithAggregatesFilter<"ArticuloPeticion"> | number
    tipoArticuloId?: IntWithAggregatesFilter<"ArticuloPeticion"> | number
    cantidad?: IntWithAggregatesFilter<"ArticuloPeticion"> | number
    creadoEn?: DateTimeWithAggregatesFilter<"ArticuloPeticion"> | Date | string
  }

  export type SolicitudLimpiezaWhereInput = {
    AND?: SolicitudLimpiezaWhereInput | SolicitudLimpiezaWhereInput[]
    OR?: SolicitudLimpiezaWhereInput[]
    NOT?: SolicitudLimpiezaWhereInput | SolicitudLimpiezaWhereInput[]
    id?: IntFilter<"SolicitudLimpieza"> | number
    direccion?: StringFilter<"SolicitudLimpieza"> | string
    contactoNombre?: StringFilter<"SolicitudLimpieza"> | string
    contactoTel?: StringFilter<"SolicitudLimpieza"> | string
    estado?: StringFilter<"SolicitudLimpieza"> | string
    latitud?: FloatFilter<"SolicitudLimpieza"> | number
    longitud?: FloatFilter<"SolicitudLimpieza"> | number
    descripcion?: StringNullableFilter<"SolicitudLimpieza"> | string | null
    creadoEn?: DateTimeFilter<"SolicitudLimpieza"> | Date | string
    actualizadoEn?: DateTimeFilter<"SolicitudLimpieza"> | Date | string
  }

  export type SolicitudLimpiezaOrderByWithRelationInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type SolicitudLimpiezaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SolicitudLimpiezaWhereInput | SolicitudLimpiezaWhereInput[]
    OR?: SolicitudLimpiezaWhereInput[]
    NOT?: SolicitudLimpiezaWhereInput | SolicitudLimpiezaWhereInput[]
    direccion?: StringFilter<"SolicitudLimpieza"> | string
    contactoNombre?: StringFilter<"SolicitudLimpieza"> | string
    contactoTel?: StringFilter<"SolicitudLimpieza"> | string
    estado?: StringFilter<"SolicitudLimpieza"> | string
    latitud?: FloatFilter<"SolicitudLimpieza"> | number
    longitud?: FloatFilter<"SolicitudLimpieza"> | number
    descripcion?: StringNullableFilter<"SolicitudLimpieza"> | string | null
    creadoEn?: DateTimeFilter<"SolicitudLimpieza"> | Date | string
    actualizadoEn?: DateTimeFilter<"SolicitudLimpieza"> | Date | string
  }, "id">

  export type SolicitudLimpiezaOrderByWithAggregationInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: SolicitudLimpiezaCountOrderByAggregateInput
    _avg?: SolicitudLimpiezaAvgOrderByAggregateInput
    _max?: SolicitudLimpiezaMaxOrderByAggregateInput
    _min?: SolicitudLimpiezaMinOrderByAggregateInput
    _sum?: SolicitudLimpiezaSumOrderByAggregateInput
  }

  export type SolicitudLimpiezaScalarWhereWithAggregatesInput = {
    AND?: SolicitudLimpiezaScalarWhereWithAggregatesInput | SolicitudLimpiezaScalarWhereWithAggregatesInput[]
    OR?: SolicitudLimpiezaScalarWhereWithAggregatesInput[]
    NOT?: SolicitudLimpiezaScalarWhereWithAggregatesInput | SolicitudLimpiezaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SolicitudLimpieza"> | number
    direccion?: StringWithAggregatesFilter<"SolicitudLimpieza"> | string
    contactoNombre?: StringWithAggregatesFilter<"SolicitudLimpieza"> | string
    contactoTel?: StringWithAggregatesFilter<"SolicitudLimpieza"> | string
    estado?: StringWithAggregatesFilter<"SolicitudLimpieza"> | string
    latitud?: FloatWithAggregatesFilter<"SolicitudLimpieza"> | number
    longitud?: FloatWithAggregatesFilter<"SolicitudLimpieza"> | number
    descripcion?: StringNullableWithAggregatesFilter<"SolicitudLimpieza"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"SolicitudLimpieza"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"SolicitudLimpieza"> | Date | string
  }

  export type MensajeContactoWhereInput = {
    AND?: MensajeContactoWhereInput | MensajeContactoWhereInput[]
    OR?: MensajeContactoWhereInput[]
    NOT?: MensajeContactoWhereInput | MensajeContactoWhereInput[]
    id?: IntFilter<"MensajeContacto"> | number
    nombre?: StringFilter<"MensajeContacto"> | string
    email?: StringNullableFilter<"MensajeContacto"> | string | null
    telefono?: StringNullableFilter<"MensajeContacto"> | string | null
    mensaje?: StringFilter<"MensajeContacto"> | string
    leido?: BoolFilter<"MensajeContacto"> | boolean
    creadoEn?: DateTimeFilter<"MensajeContacto"> | Date | string
  }

  export type MensajeContactoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    mensaje?: SortOrder
    leido?: SortOrder
    creadoEn?: SortOrder
  }

  export type MensajeContactoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MensajeContactoWhereInput | MensajeContactoWhereInput[]
    OR?: MensajeContactoWhereInput[]
    NOT?: MensajeContactoWhereInput | MensajeContactoWhereInput[]
    nombre?: StringFilter<"MensajeContacto"> | string
    email?: StringNullableFilter<"MensajeContacto"> | string | null
    telefono?: StringNullableFilter<"MensajeContacto"> | string | null
    mensaje?: StringFilter<"MensajeContacto"> | string
    leido?: BoolFilter<"MensajeContacto"> | boolean
    creadoEn?: DateTimeFilter<"MensajeContacto"> | Date | string
  }, "id">

  export type MensajeContactoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    mensaje?: SortOrder
    leido?: SortOrder
    creadoEn?: SortOrder
    _count?: MensajeContactoCountOrderByAggregateInput
    _avg?: MensajeContactoAvgOrderByAggregateInput
    _max?: MensajeContactoMaxOrderByAggregateInput
    _min?: MensajeContactoMinOrderByAggregateInput
    _sum?: MensajeContactoSumOrderByAggregateInput
  }

  export type MensajeContactoScalarWhereWithAggregatesInput = {
    AND?: MensajeContactoScalarWhereWithAggregatesInput | MensajeContactoScalarWhereWithAggregatesInput[]
    OR?: MensajeContactoScalarWhereWithAggregatesInput[]
    NOT?: MensajeContactoScalarWhereWithAggregatesInput | MensajeContactoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MensajeContacto"> | number
    nombre?: StringWithAggregatesFilter<"MensajeContacto"> | string
    email?: StringNullableWithAggregatesFilter<"MensajeContacto"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"MensajeContacto"> | string | null
    mensaje?: StringWithAggregatesFilter<"MensajeContacto"> | string
    leido?: BoolWithAggregatesFilter<"MensajeContacto"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"MensajeContacto"> | Date | string
  }

  export type InformacionUtilWhereInput = {
    AND?: InformacionUtilWhereInput | InformacionUtilWhereInput[]
    OR?: InformacionUtilWhereInput[]
    NOT?: InformacionUtilWhereInput | InformacionUtilWhereInput[]
    id?: IntFilter<"InformacionUtil"> | number
    nombre?: StringFilter<"InformacionUtil"> | string
    email?: StringNullableFilter<"InformacionUtil"> | string | null
    telefono?: StringFilter<"InformacionUtil"> | string
    direccion?: StringNullableFilter<"InformacionUtil"> | string | null
    horario?: StringNullableFilter<"InformacionUtil"> | string | null
    descripcion?: StringNullableFilter<"InformacionUtil"> | string | null
    leido?: BoolFilter<"InformacionUtil"> | boolean
    creadoEn?: DateTimeFilter<"InformacionUtil"> | Date | string
  }

  export type InformacionUtilOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrderInput | SortOrder
    telefono?: SortOrder
    direccion?: SortOrderInput | SortOrder
    horario?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    leido?: SortOrder
    creadoEn?: SortOrder
  }

  export type InformacionUtilWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InformacionUtilWhereInput | InformacionUtilWhereInput[]
    OR?: InformacionUtilWhereInput[]
    NOT?: InformacionUtilWhereInput | InformacionUtilWhereInput[]
    nombre?: StringFilter<"InformacionUtil"> | string
    email?: StringNullableFilter<"InformacionUtil"> | string | null
    telefono?: StringFilter<"InformacionUtil"> | string
    direccion?: StringNullableFilter<"InformacionUtil"> | string | null
    horario?: StringNullableFilter<"InformacionUtil"> | string | null
    descripcion?: StringNullableFilter<"InformacionUtil"> | string | null
    leido?: BoolFilter<"InformacionUtil"> | boolean
    creadoEn?: DateTimeFilter<"InformacionUtil"> | Date | string
  }, "id">

  export type InformacionUtilOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrderInput | SortOrder
    telefono?: SortOrder
    direccion?: SortOrderInput | SortOrder
    horario?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    leido?: SortOrder
    creadoEn?: SortOrder
    _count?: InformacionUtilCountOrderByAggregateInput
    _avg?: InformacionUtilAvgOrderByAggregateInput
    _max?: InformacionUtilMaxOrderByAggregateInput
    _min?: InformacionUtilMinOrderByAggregateInput
    _sum?: InformacionUtilSumOrderByAggregateInput
  }

  export type InformacionUtilScalarWhereWithAggregatesInput = {
    AND?: InformacionUtilScalarWhereWithAggregatesInput | InformacionUtilScalarWhereWithAggregatesInput[]
    OR?: InformacionUtilScalarWhereWithAggregatesInput[]
    NOT?: InformacionUtilScalarWhereWithAggregatesInput | InformacionUtilScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InformacionUtil"> | number
    nombre?: StringWithAggregatesFilter<"InformacionUtil"> | string
    email?: StringNullableWithAggregatesFilter<"InformacionUtil"> | string | null
    telefono?: StringWithAggregatesFilter<"InformacionUtil"> | string
    direccion?: StringNullableWithAggregatesFilter<"InformacionUtil"> | string | null
    horario?: StringNullableWithAggregatesFilter<"InformacionUtil"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"InformacionUtil"> | string | null
    leido?: BoolWithAggregatesFilter<"InformacionUtil"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"InformacionUtil"> | Date | string
  }

  export type MensajeWhereInput = {
    AND?: MensajeWhereInput | MensajeWhereInput[]
    OR?: MensajeWhereInput[]
    NOT?: MensajeWhereInput | MensajeWhereInput[]
    id?: IntFilter<"Mensaje"> | number
    nombre?: StringFilter<"Mensaje"> | string
    email?: StringFilter<"Mensaje"> | string
    telefono?: StringNullableFilter<"Mensaje"> | string | null
    mensaje?: StringFilter<"Mensaje"> | string
    leido?: BoolFilter<"Mensaje"> | boolean
    creadoEn?: DateTimeFilter<"Mensaje"> | Date | string
  }

  export type MensajeOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrderInput | SortOrder
    mensaje?: SortOrder
    leido?: SortOrder
    creadoEn?: SortOrder
  }

  export type MensajeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MensajeWhereInput | MensajeWhereInput[]
    OR?: MensajeWhereInput[]
    NOT?: MensajeWhereInput | MensajeWhereInput[]
    nombre?: StringFilter<"Mensaje"> | string
    email?: StringFilter<"Mensaje"> | string
    telefono?: StringNullableFilter<"Mensaje"> | string | null
    mensaje?: StringFilter<"Mensaje"> | string
    leido?: BoolFilter<"Mensaje"> | boolean
    creadoEn?: DateTimeFilter<"Mensaje"> | Date | string
  }, "id">

  export type MensajeOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrderInput | SortOrder
    mensaje?: SortOrder
    leido?: SortOrder
    creadoEn?: SortOrder
    _count?: MensajeCountOrderByAggregateInput
    _avg?: MensajeAvgOrderByAggregateInput
    _max?: MensajeMaxOrderByAggregateInput
    _min?: MensajeMinOrderByAggregateInput
    _sum?: MensajeSumOrderByAggregateInput
  }

  export type MensajeScalarWhereWithAggregatesInput = {
    AND?: MensajeScalarWhereWithAggregatesInput | MensajeScalarWhereWithAggregatesInput[]
    OR?: MensajeScalarWhereWithAggregatesInput[]
    NOT?: MensajeScalarWhereWithAggregatesInput | MensajeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mensaje"> | number
    nombre?: StringWithAggregatesFilter<"Mensaje"> | string
    email?: StringWithAggregatesFilter<"Mensaje"> | string
    telefono?: StringNullableWithAggregatesFilter<"Mensaje"> | string | null
    mensaje?: StringWithAggregatesFilter<"Mensaje"> | string
    leido?: BoolWithAggregatesFilter<"Mensaje"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"Mensaje"> | Date | string
  }

  export type TipoArticuloPersonalizadoWhereInput = {
    AND?: TipoArticuloPersonalizadoWhereInput | TipoArticuloPersonalizadoWhereInput[]
    OR?: TipoArticuloPersonalizadoWhereInput[]
    NOT?: TipoArticuloPersonalizadoWhereInput | TipoArticuloPersonalizadoWhereInput[]
    id?: IntFilter<"TipoArticuloPersonalizado"> | number
    nombre?: StringFilter<"TipoArticuloPersonalizado"> | string
    solicitudId?: IntFilter<"TipoArticuloPersonalizado"> | number
    creadoEn?: DateTimeFilter<"TipoArticuloPersonalizado"> | Date | string
    solicitud?: XOR<SolicitudScalarRelationFilter, SolicitudWhereInput>
    ArticuloSolicitud?: ArticuloSolicitudListRelationFilter
  }

  export type TipoArticuloPersonalizadoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    solicitudId?: SortOrder
    creadoEn?: SortOrder
    solicitud?: SolicitudOrderByWithRelationInput
    ArticuloSolicitud?: ArticuloSolicitudOrderByRelationAggregateInput
  }

  export type TipoArticuloPersonalizadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: TipoArticuloPersonalizadoWhereInput | TipoArticuloPersonalizadoWhereInput[]
    OR?: TipoArticuloPersonalizadoWhereInput[]
    NOT?: TipoArticuloPersonalizadoWhereInput | TipoArticuloPersonalizadoWhereInput[]
    solicitudId?: IntFilter<"TipoArticuloPersonalizado"> | number
    creadoEn?: DateTimeFilter<"TipoArticuloPersonalizado"> | Date | string
    solicitud?: XOR<SolicitudScalarRelationFilter, SolicitudWhereInput>
    ArticuloSolicitud?: ArticuloSolicitudListRelationFilter
  }, "id" | "nombre">

  export type TipoArticuloPersonalizadoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    solicitudId?: SortOrder
    creadoEn?: SortOrder
    _count?: TipoArticuloPersonalizadoCountOrderByAggregateInput
    _avg?: TipoArticuloPersonalizadoAvgOrderByAggregateInput
    _max?: TipoArticuloPersonalizadoMaxOrderByAggregateInput
    _min?: TipoArticuloPersonalizadoMinOrderByAggregateInput
    _sum?: TipoArticuloPersonalizadoSumOrderByAggregateInput
  }

  export type TipoArticuloPersonalizadoScalarWhereWithAggregatesInput = {
    AND?: TipoArticuloPersonalizadoScalarWhereWithAggregatesInput | TipoArticuloPersonalizadoScalarWhereWithAggregatesInput[]
    OR?: TipoArticuloPersonalizadoScalarWhereWithAggregatesInput[]
    NOT?: TipoArticuloPersonalizadoScalarWhereWithAggregatesInput | TipoArticuloPersonalizadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoArticuloPersonalizado"> | number
    nombre?: StringWithAggregatesFilter<"TipoArticuloPersonalizado"> | string
    solicitudId?: IntWithAggregatesFilter<"TipoArticuloPersonalizado"> | number
    creadoEn?: DateTimeWithAggregatesFilter<"TipoArticuloPersonalizado"> | Date | string
  }

  export type TipoArticuloCreateInput = {
    nombre: string
    creadoEn?: Date | string
    articulosOferta?: ArticuloOfertaCreateNestedManyWithoutTipoArticuloInput
    articulosPeticion?: ArticuloPeticionCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitud?: ArticuloSolicitudCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloUncheckedCreateInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
    articulosOferta?: ArticuloOfertaUncheckedCreateNestedManyWithoutTipoArticuloInput
    articulosPeticion?: ArticuloPeticionUncheckedCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitud?: ArticuloSolicitudUncheckedCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosOferta?: ArticuloOfertaUpdateManyWithoutTipoArticuloNestedInput
    articulosPeticion?: ArticuloPeticionUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitud?: ArticuloSolicitudUpdateManyWithoutTipoArticuloNestedInput
  }

  export type TipoArticuloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosOferta?: ArticuloOfertaUncheckedUpdateManyWithoutTipoArticuloNestedInput
    articulosPeticion?: ArticuloPeticionUncheckedUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitud?: ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloNestedInput
  }

  export type TipoArticuloCreateManyInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
  }

  export type TipoArticuloUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoArticuloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PuntoDonacionCreateInput = {
    nombre?: string | null
    direccion: string
    responsable: string
    telefono?: string | null
    latitud: number
    longitud: number
    horarioApertura?: string | null
    horarioCierre?: string | null
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    articulos?: ArticuloOfertaCreateNestedManyWithoutPuntoDonacionInput
  }

  export type PuntoDonacionUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    direccion: string
    responsable: string
    telefono?: string | null
    latitud: number
    longitud: number
    horarioApertura?: string | null
    horarioCierre?: string | null
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    articulos?: ArticuloOfertaUncheckedCreateNestedManyWithoutPuntoDonacionInput
  }

  export type PuntoDonacionUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulos?: ArticuloOfertaUpdateManyWithoutPuntoDonacionNestedInput
  }

  export type PuntoDonacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulos?: ArticuloOfertaUncheckedUpdateManyWithoutPuntoDonacionNestedInput
  }

  export type PuntoDonacionCreateManyInput = {
    id?: number
    nombre?: string | null
    direccion: string
    responsable: string
    telefono?: string | null
    latitud: number
    longitud: number
    horarioApertura?: string | null
    horarioCierre?: string | null
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PuntoDonacionUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PuntoDonacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloOfertaCreateInput = {
    cantidad?: number | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    puntoDonacion: PuntoDonacionCreateNestedOneWithoutArticulosInput
    tipoArticulo: TipoArticuloCreateNestedOneWithoutArticulosOfertaInput
  }

  export type ArticuloOfertaUncheckedCreateInput = {
    id?: number
    puntoDonacionId: number
    tipoArticuloId: number
    cantidad?: number | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ArticuloOfertaUpdateInput = {
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    puntoDonacion?: PuntoDonacionUpdateOneRequiredWithoutArticulosNestedInput
    tipoArticulo?: TipoArticuloUpdateOneRequiredWithoutArticulosOfertaNestedInput
  }

  export type ArticuloOfertaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    puntoDonacionId?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloOfertaCreateManyInput = {
    id?: number
    puntoDonacionId: number
    tipoArticuloId: number
    cantidad?: number | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ArticuloOfertaUpdateManyMutationInput = {
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloOfertaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    puntoDonacionId?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudCreateInput = {
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado?: string
    latitud: number
    longitud: number
    descripcion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    articulos?: ArticuloSolicitudCreateNestedManyWithoutSolicitudInput
    tiposArticuloPersonalizados?: TipoArticuloPersonalizadoCreateNestedManyWithoutSolicitudInput
  }

  export type SolicitudUncheckedCreateInput = {
    id?: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado?: string
    latitud: number
    longitud: number
    descripcion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    articulos?: ArticuloSolicitudUncheckedCreateNestedManyWithoutSolicitudInput
    tiposArticuloPersonalizados?: TipoArticuloPersonalizadoUncheckedCreateNestedManyWithoutSolicitudInput
  }

  export type SolicitudUpdateInput = {
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulos?: ArticuloSolicitudUpdateManyWithoutSolicitudNestedInput
    tiposArticuloPersonalizados?: TipoArticuloPersonalizadoUpdateManyWithoutSolicitudNestedInput
  }

  export type SolicitudUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulos?: ArticuloSolicitudUncheckedUpdateManyWithoutSolicitudNestedInput
    tiposArticuloPersonalizados?: TipoArticuloPersonalizadoUncheckedUpdateManyWithoutSolicitudNestedInput
  }

  export type SolicitudCreateManyInput = {
    id?: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado?: string
    latitud: number
    longitud: number
    descripcion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type SolicitudUpdateManyMutationInput = {
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitudCreateInput = {
    cantidad: number
    creadoEn?: Date | string
    solicitud: SolicitudCreateNestedOneWithoutArticulosInput
    tipoArticulo?: TipoArticuloCreateNestedOneWithoutArticulosSolicitudInput
    tipoArticuloPersonalizado?: TipoArticuloPersonalizadoCreateNestedOneWithoutArticuloSolicitudInput
  }

  export type ArticuloSolicitudUncheckedCreateInput = {
    id?: number
    solicitudId: number
    tipoArticuloId?: number | null
    tipoArticuloPersonalizadoId?: number | null
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloSolicitudUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitud?: SolicitudUpdateOneRequiredWithoutArticulosNestedInput
    tipoArticulo?: TipoArticuloUpdateOneWithoutArticulosSolicitudNestedInput
    tipoArticuloPersonalizado?: TipoArticuloPersonalizadoUpdateOneWithoutArticuloSolicitudNestedInput
  }

  export type ArticuloSolicitudUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    solicitudId?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: NullableIntFieldUpdateOperationsInput | number | null
    tipoArticuloPersonalizadoId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitudCreateManyInput = {
    id?: number
    solicitudId: number
    tipoArticuloId?: number | null
    tipoArticuloPersonalizadoId?: number | null
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloSolicitudUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitudUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    solicitudId?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: NullableIntFieldUpdateOperationsInput | number | null
    tipoArticuloPersonalizadoId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeticionDonacionCreateInput = {
    direccion: string
    contactoNombre: string
    contactoTel: string
    latitud?: number | null
    longitud?: number | null
    descripcion?: string | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    articulos?: ArticuloPeticionCreateNestedManyWithoutPeticionDonacionInput
  }

  export type PeticionDonacionUncheckedCreateInput = {
    id?: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    latitud?: number | null
    longitud?: number | null
    descripcion?: string | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    articulos?: ArticuloPeticionUncheckedCreateNestedManyWithoutPeticionDonacionInput
  }

  export type PeticionDonacionUpdateInput = {
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulos?: ArticuloPeticionUpdateManyWithoutPeticionDonacionNestedInput
  }

  export type PeticionDonacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulos?: ArticuloPeticionUncheckedUpdateManyWithoutPeticionDonacionNestedInput
  }

  export type PeticionDonacionCreateManyInput = {
    id?: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    latitud?: number | null
    longitud?: number | null
    descripcion?: string | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PeticionDonacionUpdateManyMutationInput = {
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeticionDonacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloPeticionCreateInput = {
    cantidad: number
    creadoEn?: Date | string
    peticionDonacion: PeticionDonacionCreateNestedOneWithoutArticulosInput
    tipoArticulo: TipoArticuloCreateNestedOneWithoutArticulosPeticionInput
  }

  export type ArticuloPeticionUncheckedCreateInput = {
    id?: number
    peticionDonacionId: number
    tipoArticuloId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloPeticionUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    peticionDonacion?: PeticionDonacionUpdateOneRequiredWithoutArticulosNestedInput
    tipoArticulo?: TipoArticuloUpdateOneRequiredWithoutArticulosPeticionNestedInput
  }

  export type ArticuloPeticionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    peticionDonacionId?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloPeticionCreateManyInput = {
    id?: number
    peticionDonacionId: number
    tipoArticuloId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloPeticionUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloPeticionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    peticionDonacionId?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudLimpiezaCreateInput = {
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado?: string
    latitud: number
    longitud: number
    descripcion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type SolicitudLimpiezaUncheckedCreateInput = {
    id?: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado?: string
    latitud: number
    longitud: number
    descripcion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type SolicitudLimpiezaUpdateInput = {
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudLimpiezaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudLimpiezaCreateManyInput = {
    id?: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado?: string
    latitud: number
    longitud: number
    descripcion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type SolicitudLimpiezaUpdateManyMutationInput = {
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudLimpiezaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeContactoCreateInput = {
    nombre: string
    email?: string | null
    telefono?: string | null
    mensaje: string
    leido?: boolean
    creadoEn?: Date | string
  }

  export type MensajeContactoUncheckedCreateInput = {
    id?: number
    nombre: string
    email?: string | null
    telefono?: string | null
    mensaje: string
    leido?: boolean
    creadoEn?: Date | string
  }

  export type MensajeContactoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: StringFieldUpdateOperationsInput | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeContactoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: StringFieldUpdateOperationsInput | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeContactoCreateManyInput = {
    id?: number
    nombre: string
    email?: string | null
    telefono?: string | null
    mensaje: string
    leido?: boolean
    creadoEn?: Date | string
  }

  export type MensajeContactoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: StringFieldUpdateOperationsInput | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeContactoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: StringFieldUpdateOperationsInput | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InformacionUtilCreateInput = {
    nombre: string
    email?: string | null
    telefono: string
    direccion?: string | null
    horario?: string | null
    descripcion?: string | null
    leido?: boolean
    creadoEn?: Date | string
  }

  export type InformacionUtilUncheckedCreateInput = {
    id?: number
    nombre: string
    email?: string | null
    telefono: string
    direccion?: string | null
    horario?: string | null
    descripcion?: string | null
    leido?: boolean
    creadoEn?: Date | string
  }

  export type InformacionUtilUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    leido?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InformacionUtilUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    leido?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InformacionUtilCreateManyInput = {
    id?: number
    nombre: string
    email?: string | null
    telefono: string
    direccion?: string | null
    horario?: string | null
    descripcion?: string | null
    leido?: boolean
    creadoEn?: Date | string
  }

  export type InformacionUtilUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    leido?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InformacionUtilUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    leido?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeCreateInput = {
    nombre: string
    email: string
    telefono?: string | null
    mensaje: string
    leido?: boolean
    creadoEn?: Date | string
  }

  export type MensajeUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    telefono?: string | null
    mensaje: string
    leido?: boolean
    creadoEn?: Date | string
  }

  export type MensajeUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: StringFieldUpdateOperationsInput | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: StringFieldUpdateOperationsInput | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeCreateManyInput = {
    id?: number
    nombre: string
    email: string
    telefono?: string | null
    mensaje: string
    leido?: boolean
    creadoEn?: Date | string
  }

  export type MensajeUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: StringFieldUpdateOperationsInput | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: StringFieldUpdateOperationsInput | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoArticuloPersonalizadoCreateInput = {
    nombre: string
    creadoEn?: Date | string
    solicitud: SolicitudCreateNestedOneWithoutTiposArticuloPersonalizadosInput
    ArticuloSolicitud?: ArticuloSolicitudCreateNestedManyWithoutTipoArticuloPersonalizadoInput
  }

  export type TipoArticuloPersonalizadoUncheckedCreateInput = {
    id?: number
    nombre: string
    solicitudId: number
    creadoEn?: Date | string
    ArticuloSolicitud?: ArticuloSolicitudUncheckedCreateNestedManyWithoutTipoArticuloPersonalizadoInput
  }

  export type TipoArticuloPersonalizadoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitud?: SolicitudUpdateOneRequiredWithoutTiposArticuloPersonalizadosNestedInput
    ArticuloSolicitud?: ArticuloSolicitudUpdateManyWithoutTipoArticuloPersonalizadoNestedInput
  }

  export type TipoArticuloPersonalizadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    solicitudId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    ArticuloSolicitud?: ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloPersonalizadoNestedInput
  }

  export type TipoArticuloPersonalizadoCreateManyInput = {
    id?: number
    nombre: string
    solicitudId: number
    creadoEn?: Date | string
  }

  export type TipoArticuloPersonalizadoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoArticuloPersonalizadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    solicitudId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ArticuloOfertaListRelationFilter = {
    every?: ArticuloOfertaWhereInput
    some?: ArticuloOfertaWhereInput
    none?: ArticuloOfertaWhereInput
  }

  export type ArticuloPeticionListRelationFilter = {
    every?: ArticuloPeticionWhereInput
    some?: ArticuloPeticionWhereInput
    none?: ArticuloPeticionWhereInput
  }

  export type ArticuloSolicitudListRelationFilter = {
    every?: ArticuloSolicitudWhereInput
    some?: ArticuloSolicitudWhereInput
    none?: ArticuloSolicitudWhereInput
  }

  export type ArticuloOfertaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticuloPeticionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticuloSolicitudOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoArticuloCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
  }

  export type TipoArticuloAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoArticuloMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
  }

  export type TipoArticuloMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
  }

  export type TipoArticuloSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PuntoDonacionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    responsable?: SortOrder
    telefono?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    horarioApertura?: SortOrder
    horarioCierre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PuntoDonacionAvgOrderByAggregateInput = {
    id?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type PuntoDonacionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    responsable?: SortOrder
    telefono?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    horarioApertura?: SortOrder
    horarioCierre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PuntoDonacionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    responsable?: SortOrder
    telefono?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    horarioApertura?: SortOrder
    horarioCierre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PuntoDonacionSumOrderByAggregateInput = {
    id?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PuntoDonacionScalarRelationFilter = {
    is?: PuntoDonacionWhereInput
    isNot?: PuntoDonacionWhereInput
  }

  export type TipoArticuloScalarRelationFilter = {
    is?: TipoArticuloWhereInput
    isNot?: TipoArticuloWhereInput
  }

  export type ArticuloOfertaPuntoDonacionIdTipoArticuloIdCompoundUniqueInput = {
    puntoDonacionId: number
    tipoArticuloId: number
  }

  export type ArticuloOfertaCountOrderByAggregateInput = {
    id?: SortOrder
    puntoDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ArticuloOfertaAvgOrderByAggregateInput = {
    id?: SortOrder
    puntoDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
  }

  export type ArticuloOfertaMaxOrderByAggregateInput = {
    id?: SortOrder
    puntoDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ArticuloOfertaMinOrderByAggregateInput = {
    id?: SortOrder
    puntoDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ArticuloOfertaSumOrderByAggregateInput = {
    id?: SortOrder
    puntoDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TipoArticuloPersonalizadoListRelationFilter = {
    every?: TipoArticuloPersonalizadoWhereInput
    some?: TipoArticuloPersonalizadoWhereInput
    none?: TipoArticuloPersonalizadoWhereInput
  }

  export type TipoArticuloPersonalizadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SolicitudCountOrderByAggregateInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type SolicitudAvgOrderByAggregateInput = {
    id?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type SolicitudMaxOrderByAggregateInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type SolicitudMinOrderByAggregateInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type SolicitudSumOrderByAggregateInput = {
    id?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type SolicitudScalarRelationFilter = {
    is?: SolicitudWhereInput
    isNot?: SolicitudWhereInput
  }

  export type TipoArticuloNullableScalarRelationFilter = {
    is?: TipoArticuloWhereInput | null
    isNot?: TipoArticuloWhereInput | null
  }

  export type TipoArticuloPersonalizadoNullableScalarRelationFilter = {
    is?: TipoArticuloPersonalizadoWhereInput | null
    isNot?: TipoArticuloPersonalizadoWhereInput | null
  }

  export type ArticuloSolicitudSolicitudIdTipoArticuloIdCompoundUniqueInput = {
    solicitudId: number
    tipoArticuloId: number
  }

  export type ArticuloSolicitudSolicitudIdTipoArticuloPersonalizadoIdCompoundUniqueInput = {
    solicitudId: number
    tipoArticuloPersonalizadoId: number
  }

  export type ArticuloSolicitudCountOrderByAggregateInput = {
    id?: SortOrder
    solicitudId?: SortOrder
    tipoArticuloId?: SortOrder
    tipoArticuloPersonalizadoId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
  }

  export type ArticuloSolicitudAvgOrderByAggregateInput = {
    id?: SortOrder
    solicitudId?: SortOrder
    tipoArticuloId?: SortOrder
    tipoArticuloPersonalizadoId?: SortOrder
    cantidad?: SortOrder
  }

  export type ArticuloSolicitudMaxOrderByAggregateInput = {
    id?: SortOrder
    solicitudId?: SortOrder
    tipoArticuloId?: SortOrder
    tipoArticuloPersonalizadoId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
  }

  export type ArticuloSolicitudMinOrderByAggregateInput = {
    id?: SortOrder
    solicitudId?: SortOrder
    tipoArticuloId?: SortOrder
    tipoArticuloPersonalizadoId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
  }

  export type ArticuloSolicitudSumOrderByAggregateInput = {
    id?: SortOrder
    solicitudId?: SortOrder
    tipoArticuloId?: SortOrder
    tipoArticuloPersonalizadoId?: SortOrder
    cantidad?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PeticionDonacionCountOrderByAggregateInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PeticionDonacionAvgOrderByAggregateInput = {
    id?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type PeticionDonacionMaxOrderByAggregateInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PeticionDonacionMinOrderByAggregateInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PeticionDonacionSumOrderByAggregateInput = {
    id?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PeticionDonacionScalarRelationFilter = {
    is?: PeticionDonacionWhereInput
    isNot?: PeticionDonacionWhereInput
  }

  export type ArticuloPeticionPeticionDonacionIdTipoArticuloIdCompoundUniqueInput = {
    peticionDonacionId: number
    tipoArticuloId: number
  }

  export type ArticuloPeticionCountOrderByAggregateInput = {
    id?: SortOrder
    peticionDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
  }

  export type ArticuloPeticionAvgOrderByAggregateInput = {
    id?: SortOrder
    peticionDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
  }

  export type ArticuloPeticionMaxOrderByAggregateInput = {
    id?: SortOrder
    peticionDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
  }

  export type ArticuloPeticionMinOrderByAggregateInput = {
    id?: SortOrder
    peticionDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
  }

  export type ArticuloPeticionSumOrderByAggregateInput = {
    id?: SortOrder
    peticionDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
  }

  export type SolicitudLimpiezaCountOrderByAggregateInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type SolicitudLimpiezaAvgOrderByAggregateInput = {
    id?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type SolicitudLimpiezaMaxOrderByAggregateInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type SolicitudLimpiezaMinOrderByAggregateInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type SolicitudLimpiezaSumOrderByAggregateInput = {
    id?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type MensajeContactoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    mensaje?: SortOrder
    leido?: SortOrder
    creadoEn?: SortOrder
  }

  export type MensajeContactoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MensajeContactoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    mensaje?: SortOrder
    leido?: SortOrder
    creadoEn?: SortOrder
  }

  export type MensajeContactoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    mensaje?: SortOrder
    leido?: SortOrder
    creadoEn?: SortOrder
  }

  export type MensajeContactoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InformacionUtilCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    horario?: SortOrder
    descripcion?: SortOrder
    leido?: SortOrder
    creadoEn?: SortOrder
  }

  export type InformacionUtilAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InformacionUtilMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    horario?: SortOrder
    descripcion?: SortOrder
    leido?: SortOrder
    creadoEn?: SortOrder
  }

  export type InformacionUtilMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    horario?: SortOrder
    descripcion?: SortOrder
    leido?: SortOrder
    creadoEn?: SortOrder
  }

  export type InformacionUtilSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MensajeCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    mensaje?: SortOrder
    leido?: SortOrder
    creadoEn?: SortOrder
  }

  export type MensajeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MensajeMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    mensaje?: SortOrder
    leido?: SortOrder
    creadoEn?: SortOrder
  }

  export type MensajeMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    mensaje?: SortOrder
    leido?: SortOrder
    creadoEn?: SortOrder
  }

  export type MensajeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoArticuloPersonalizadoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    solicitudId?: SortOrder
    creadoEn?: SortOrder
  }

  export type TipoArticuloPersonalizadoAvgOrderByAggregateInput = {
    id?: SortOrder
    solicitudId?: SortOrder
  }

  export type TipoArticuloPersonalizadoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    solicitudId?: SortOrder
    creadoEn?: SortOrder
  }

  export type TipoArticuloPersonalizadoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    solicitudId?: SortOrder
    creadoEn?: SortOrder
  }

  export type TipoArticuloPersonalizadoSumOrderByAggregateInput = {
    id?: SortOrder
    solicitudId?: SortOrder
  }

  export type ArticuloOfertaCreateNestedManyWithoutTipoArticuloInput = {
    create?: XOR<ArticuloOfertaCreateWithoutTipoArticuloInput, ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput> | ArticuloOfertaCreateWithoutTipoArticuloInput[] | ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput | ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput[]
    createMany?: ArticuloOfertaCreateManyTipoArticuloInputEnvelope
    connect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
  }

  export type ArticuloPeticionCreateNestedManyWithoutTipoArticuloInput = {
    create?: XOR<ArticuloPeticionCreateWithoutTipoArticuloInput, ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput> | ArticuloPeticionCreateWithoutTipoArticuloInput[] | ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput | ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput[]
    createMany?: ArticuloPeticionCreateManyTipoArticuloInputEnvelope
    connect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
  }

  export type ArticuloSolicitudCreateNestedManyWithoutTipoArticuloInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutTipoArticuloInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput> | ArticuloSolicitudCreateWithoutTipoArticuloInput[] | ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput | ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput[]
    createMany?: ArticuloSolicitudCreateManyTipoArticuloInputEnvelope
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
  }

  export type ArticuloOfertaUncheckedCreateNestedManyWithoutTipoArticuloInput = {
    create?: XOR<ArticuloOfertaCreateWithoutTipoArticuloInput, ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput> | ArticuloOfertaCreateWithoutTipoArticuloInput[] | ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput | ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput[]
    createMany?: ArticuloOfertaCreateManyTipoArticuloInputEnvelope
    connect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
  }

  export type ArticuloPeticionUncheckedCreateNestedManyWithoutTipoArticuloInput = {
    create?: XOR<ArticuloPeticionCreateWithoutTipoArticuloInput, ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput> | ArticuloPeticionCreateWithoutTipoArticuloInput[] | ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput | ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput[]
    createMany?: ArticuloPeticionCreateManyTipoArticuloInputEnvelope
    connect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
  }

  export type ArticuloSolicitudUncheckedCreateNestedManyWithoutTipoArticuloInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutTipoArticuloInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput> | ArticuloSolicitudCreateWithoutTipoArticuloInput[] | ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput | ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput[]
    createMany?: ArticuloSolicitudCreateManyTipoArticuloInputEnvelope
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArticuloOfertaUpdateManyWithoutTipoArticuloNestedInput = {
    create?: XOR<ArticuloOfertaCreateWithoutTipoArticuloInput, ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput> | ArticuloOfertaCreateWithoutTipoArticuloInput[] | ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput | ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput[]
    upsert?: ArticuloOfertaUpsertWithWhereUniqueWithoutTipoArticuloInput | ArticuloOfertaUpsertWithWhereUniqueWithoutTipoArticuloInput[]
    createMany?: ArticuloOfertaCreateManyTipoArticuloInputEnvelope
    set?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    disconnect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    delete?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    connect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    update?: ArticuloOfertaUpdateWithWhereUniqueWithoutTipoArticuloInput | ArticuloOfertaUpdateWithWhereUniqueWithoutTipoArticuloInput[]
    updateMany?: ArticuloOfertaUpdateManyWithWhereWithoutTipoArticuloInput | ArticuloOfertaUpdateManyWithWhereWithoutTipoArticuloInput[]
    deleteMany?: ArticuloOfertaScalarWhereInput | ArticuloOfertaScalarWhereInput[]
  }

  export type ArticuloPeticionUpdateManyWithoutTipoArticuloNestedInput = {
    create?: XOR<ArticuloPeticionCreateWithoutTipoArticuloInput, ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput> | ArticuloPeticionCreateWithoutTipoArticuloInput[] | ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput | ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput[]
    upsert?: ArticuloPeticionUpsertWithWhereUniqueWithoutTipoArticuloInput | ArticuloPeticionUpsertWithWhereUniqueWithoutTipoArticuloInput[]
    createMany?: ArticuloPeticionCreateManyTipoArticuloInputEnvelope
    set?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    disconnect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    delete?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    connect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    update?: ArticuloPeticionUpdateWithWhereUniqueWithoutTipoArticuloInput | ArticuloPeticionUpdateWithWhereUniqueWithoutTipoArticuloInput[]
    updateMany?: ArticuloPeticionUpdateManyWithWhereWithoutTipoArticuloInput | ArticuloPeticionUpdateManyWithWhereWithoutTipoArticuloInput[]
    deleteMany?: ArticuloPeticionScalarWhereInput | ArticuloPeticionScalarWhereInput[]
  }

  export type ArticuloSolicitudUpdateManyWithoutTipoArticuloNestedInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutTipoArticuloInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput> | ArticuloSolicitudCreateWithoutTipoArticuloInput[] | ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput | ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput[]
    upsert?: ArticuloSolicitudUpsertWithWhereUniqueWithoutTipoArticuloInput | ArticuloSolicitudUpsertWithWhereUniqueWithoutTipoArticuloInput[]
    createMany?: ArticuloSolicitudCreateManyTipoArticuloInputEnvelope
    set?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    disconnect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    delete?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    update?: ArticuloSolicitudUpdateWithWhereUniqueWithoutTipoArticuloInput | ArticuloSolicitudUpdateWithWhereUniqueWithoutTipoArticuloInput[]
    updateMany?: ArticuloSolicitudUpdateManyWithWhereWithoutTipoArticuloInput | ArticuloSolicitudUpdateManyWithWhereWithoutTipoArticuloInput[]
    deleteMany?: ArticuloSolicitudScalarWhereInput | ArticuloSolicitudScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArticuloOfertaUncheckedUpdateManyWithoutTipoArticuloNestedInput = {
    create?: XOR<ArticuloOfertaCreateWithoutTipoArticuloInput, ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput> | ArticuloOfertaCreateWithoutTipoArticuloInput[] | ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput | ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput[]
    upsert?: ArticuloOfertaUpsertWithWhereUniqueWithoutTipoArticuloInput | ArticuloOfertaUpsertWithWhereUniqueWithoutTipoArticuloInput[]
    createMany?: ArticuloOfertaCreateManyTipoArticuloInputEnvelope
    set?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    disconnect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    delete?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    connect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    update?: ArticuloOfertaUpdateWithWhereUniqueWithoutTipoArticuloInput | ArticuloOfertaUpdateWithWhereUniqueWithoutTipoArticuloInput[]
    updateMany?: ArticuloOfertaUpdateManyWithWhereWithoutTipoArticuloInput | ArticuloOfertaUpdateManyWithWhereWithoutTipoArticuloInput[]
    deleteMany?: ArticuloOfertaScalarWhereInput | ArticuloOfertaScalarWhereInput[]
  }

  export type ArticuloPeticionUncheckedUpdateManyWithoutTipoArticuloNestedInput = {
    create?: XOR<ArticuloPeticionCreateWithoutTipoArticuloInput, ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput> | ArticuloPeticionCreateWithoutTipoArticuloInput[] | ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput | ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput[]
    upsert?: ArticuloPeticionUpsertWithWhereUniqueWithoutTipoArticuloInput | ArticuloPeticionUpsertWithWhereUniqueWithoutTipoArticuloInput[]
    createMany?: ArticuloPeticionCreateManyTipoArticuloInputEnvelope
    set?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    disconnect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    delete?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    connect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    update?: ArticuloPeticionUpdateWithWhereUniqueWithoutTipoArticuloInput | ArticuloPeticionUpdateWithWhereUniqueWithoutTipoArticuloInput[]
    updateMany?: ArticuloPeticionUpdateManyWithWhereWithoutTipoArticuloInput | ArticuloPeticionUpdateManyWithWhereWithoutTipoArticuloInput[]
    deleteMany?: ArticuloPeticionScalarWhereInput | ArticuloPeticionScalarWhereInput[]
  }

  export type ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloNestedInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutTipoArticuloInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput> | ArticuloSolicitudCreateWithoutTipoArticuloInput[] | ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput | ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput[]
    upsert?: ArticuloSolicitudUpsertWithWhereUniqueWithoutTipoArticuloInput | ArticuloSolicitudUpsertWithWhereUniqueWithoutTipoArticuloInput[]
    createMany?: ArticuloSolicitudCreateManyTipoArticuloInputEnvelope
    set?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    disconnect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    delete?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    update?: ArticuloSolicitudUpdateWithWhereUniqueWithoutTipoArticuloInput | ArticuloSolicitudUpdateWithWhereUniqueWithoutTipoArticuloInput[]
    updateMany?: ArticuloSolicitudUpdateManyWithWhereWithoutTipoArticuloInput | ArticuloSolicitudUpdateManyWithWhereWithoutTipoArticuloInput[]
    deleteMany?: ArticuloSolicitudScalarWhereInput | ArticuloSolicitudScalarWhereInput[]
  }

  export type ArticuloOfertaCreateNestedManyWithoutPuntoDonacionInput = {
    create?: XOR<ArticuloOfertaCreateWithoutPuntoDonacionInput, ArticuloOfertaUncheckedCreateWithoutPuntoDonacionInput> | ArticuloOfertaCreateWithoutPuntoDonacionInput[] | ArticuloOfertaUncheckedCreateWithoutPuntoDonacionInput[]
    connectOrCreate?: ArticuloOfertaCreateOrConnectWithoutPuntoDonacionInput | ArticuloOfertaCreateOrConnectWithoutPuntoDonacionInput[]
    createMany?: ArticuloOfertaCreateManyPuntoDonacionInputEnvelope
    connect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
  }

  export type ArticuloOfertaUncheckedCreateNestedManyWithoutPuntoDonacionInput = {
    create?: XOR<ArticuloOfertaCreateWithoutPuntoDonacionInput, ArticuloOfertaUncheckedCreateWithoutPuntoDonacionInput> | ArticuloOfertaCreateWithoutPuntoDonacionInput[] | ArticuloOfertaUncheckedCreateWithoutPuntoDonacionInput[]
    connectOrCreate?: ArticuloOfertaCreateOrConnectWithoutPuntoDonacionInput | ArticuloOfertaCreateOrConnectWithoutPuntoDonacionInput[]
    createMany?: ArticuloOfertaCreateManyPuntoDonacionInputEnvelope
    connect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ArticuloOfertaUpdateManyWithoutPuntoDonacionNestedInput = {
    create?: XOR<ArticuloOfertaCreateWithoutPuntoDonacionInput, ArticuloOfertaUncheckedCreateWithoutPuntoDonacionInput> | ArticuloOfertaCreateWithoutPuntoDonacionInput[] | ArticuloOfertaUncheckedCreateWithoutPuntoDonacionInput[]
    connectOrCreate?: ArticuloOfertaCreateOrConnectWithoutPuntoDonacionInput | ArticuloOfertaCreateOrConnectWithoutPuntoDonacionInput[]
    upsert?: ArticuloOfertaUpsertWithWhereUniqueWithoutPuntoDonacionInput | ArticuloOfertaUpsertWithWhereUniqueWithoutPuntoDonacionInput[]
    createMany?: ArticuloOfertaCreateManyPuntoDonacionInputEnvelope
    set?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    disconnect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    delete?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    connect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    update?: ArticuloOfertaUpdateWithWhereUniqueWithoutPuntoDonacionInput | ArticuloOfertaUpdateWithWhereUniqueWithoutPuntoDonacionInput[]
    updateMany?: ArticuloOfertaUpdateManyWithWhereWithoutPuntoDonacionInput | ArticuloOfertaUpdateManyWithWhereWithoutPuntoDonacionInput[]
    deleteMany?: ArticuloOfertaScalarWhereInput | ArticuloOfertaScalarWhereInput[]
  }

  export type ArticuloOfertaUncheckedUpdateManyWithoutPuntoDonacionNestedInput = {
    create?: XOR<ArticuloOfertaCreateWithoutPuntoDonacionInput, ArticuloOfertaUncheckedCreateWithoutPuntoDonacionInput> | ArticuloOfertaCreateWithoutPuntoDonacionInput[] | ArticuloOfertaUncheckedCreateWithoutPuntoDonacionInput[]
    connectOrCreate?: ArticuloOfertaCreateOrConnectWithoutPuntoDonacionInput | ArticuloOfertaCreateOrConnectWithoutPuntoDonacionInput[]
    upsert?: ArticuloOfertaUpsertWithWhereUniqueWithoutPuntoDonacionInput | ArticuloOfertaUpsertWithWhereUniqueWithoutPuntoDonacionInput[]
    createMany?: ArticuloOfertaCreateManyPuntoDonacionInputEnvelope
    set?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    disconnect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    delete?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    connect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    update?: ArticuloOfertaUpdateWithWhereUniqueWithoutPuntoDonacionInput | ArticuloOfertaUpdateWithWhereUniqueWithoutPuntoDonacionInput[]
    updateMany?: ArticuloOfertaUpdateManyWithWhereWithoutPuntoDonacionInput | ArticuloOfertaUpdateManyWithWhereWithoutPuntoDonacionInput[]
    deleteMany?: ArticuloOfertaScalarWhereInput | ArticuloOfertaScalarWhereInput[]
  }

  export type PuntoDonacionCreateNestedOneWithoutArticulosInput = {
    create?: XOR<PuntoDonacionCreateWithoutArticulosInput, PuntoDonacionUncheckedCreateWithoutArticulosInput>
    connectOrCreate?: PuntoDonacionCreateOrConnectWithoutArticulosInput
    connect?: PuntoDonacionWhereUniqueInput
  }

  export type TipoArticuloCreateNestedOneWithoutArticulosOfertaInput = {
    create?: XOR<TipoArticuloCreateWithoutArticulosOfertaInput, TipoArticuloUncheckedCreateWithoutArticulosOfertaInput>
    connectOrCreate?: TipoArticuloCreateOrConnectWithoutArticulosOfertaInput
    connect?: TipoArticuloWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PuntoDonacionUpdateOneRequiredWithoutArticulosNestedInput = {
    create?: XOR<PuntoDonacionCreateWithoutArticulosInput, PuntoDonacionUncheckedCreateWithoutArticulosInput>
    connectOrCreate?: PuntoDonacionCreateOrConnectWithoutArticulosInput
    upsert?: PuntoDonacionUpsertWithoutArticulosInput
    connect?: PuntoDonacionWhereUniqueInput
    update?: XOR<XOR<PuntoDonacionUpdateToOneWithWhereWithoutArticulosInput, PuntoDonacionUpdateWithoutArticulosInput>, PuntoDonacionUncheckedUpdateWithoutArticulosInput>
  }

  export type TipoArticuloUpdateOneRequiredWithoutArticulosOfertaNestedInput = {
    create?: XOR<TipoArticuloCreateWithoutArticulosOfertaInput, TipoArticuloUncheckedCreateWithoutArticulosOfertaInput>
    connectOrCreate?: TipoArticuloCreateOrConnectWithoutArticulosOfertaInput
    upsert?: TipoArticuloUpsertWithoutArticulosOfertaInput
    connect?: TipoArticuloWhereUniqueInput
    update?: XOR<XOR<TipoArticuloUpdateToOneWithWhereWithoutArticulosOfertaInput, TipoArticuloUpdateWithoutArticulosOfertaInput>, TipoArticuloUncheckedUpdateWithoutArticulosOfertaInput>
  }

  export type ArticuloSolicitudCreateNestedManyWithoutSolicitudInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutSolicitudInput, ArticuloSolicitudUncheckedCreateWithoutSolicitudInput> | ArticuloSolicitudCreateWithoutSolicitudInput[] | ArticuloSolicitudUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutSolicitudInput | ArticuloSolicitudCreateOrConnectWithoutSolicitudInput[]
    createMany?: ArticuloSolicitudCreateManySolicitudInputEnvelope
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
  }

  export type TipoArticuloPersonalizadoCreateNestedManyWithoutSolicitudInput = {
    create?: XOR<TipoArticuloPersonalizadoCreateWithoutSolicitudInput, TipoArticuloPersonalizadoUncheckedCreateWithoutSolicitudInput> | TipoArticuloPersonalizadoCreateWithoutSolicitudInput[] | TipoArticuloPersonalizadoUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: TipoArticuloPersonalizadoCreateOrConnectWithoutSolicitudInput | TipoArticuloPersonalizadoCreateOrConnectWithoutSolicitudInput[]
    createMany?: TipoArticuloPersonalizadoCreateManySolicitudInputEnvelope
    connect?: TipoArticuloPersonalizadoWhereUniqueInput | TipoArticuloPersonalizadoWhereUniqueInput[]
  }

  export type ArticuloSolicitudUncheckedCreateNestedManyWithoutSolicitudInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutSolicitudInput, ArticuloSolicitudUncheckedCreateWithoutSolicitudInput> | ArticuloSolicitudCreateWithoutSolicitudInput[] | ArticuloSolicitudUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutSolicitudInput | ArticuloSolicitudCreateOrConnectWithoutSolicitudInput[]
    createMany?: ArticuloSolicitudCreateManySolicitudInputEnvelope
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
  }

  export type TipoArticuloPersonalizadoUncheckedCreateNestedManyWithoutSolicitudInput = {
    create?: XOR<TipoArticuloPersonalizadoCreateWithoutSolicitudInput, TipoArticuloPersonalizadoUncheckedCreateWithoutSolicitudInput> | TipoArticuloPersonalizadoCreateWithoutSolicitudInput[] | TipoArticuloPersonalizadoUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: TipoArticuloPersonalizadoCreateOrConnectWithoutSolicitudInput | TipoArticuloPersonalizadoCreateOrConnectWithoutSolicitudInput[]
    createMany?: TipoArticuloPersonalizadoCreateManySolicitudInputEnvelope
    connect?: TipoArticuloPersonalizadoWhereUniqueInput | TipoArticuloPersonalizadoWhereUniqueInput[]
  }

  export type ArticuloSolicitudUpdateManyWithoutSolicitudNestedInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutSolicitudInput, ArticuloSolicitudUncheckedCreateWithoutSolicitudInput> | ArticuloSolicitudCreateWithoutSolicitudInput[] | ArticuloSolicitudUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutSolicitudInput | ArticuloSolicitudCreateOrConnectWithoutSolicitudInput[]
    upsert?: ArticuloSolicitudUpsertWithWhereUniqueWithoutSolicitudInput | ArticuloSolicitudUpsertWithWhereUniqueWithoutSolicitudInput[]
    createMany?: ArticuloSolicitudCreateManySolicitudInputEnvelope
    set?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    disconnect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    delete?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    update?: ArticuloSolicitudUpdateWithWhereUniqueWithoutSolicitudInput | ArticuloSolicitudUpdateWithWhereUniqueWithoutSolicitudInput[]
    updateMany?: ArticuloSolicitudUpdateManyWithWhereWithoutSolicitudInput | ArticuloSolicitudUpdateManyWithWhereWithoutSolicitudInput[]
    deleteMany?: ArticuloSolicitudScalarWhereInput | ArticuloSolicitudScalarWhereInput[]
  }

  export type TipoArticuloPersonalizadoUpdateManyWithoutSolicitudNestedInput = {
    create?: XOR<TipoArticuloPersonalizadoCreateWithoutSolicitudInput, TipoArticuloPersonalizadoUncheckedCreateWithoutSolicitudInput> | TipoArticuloPersonalizadoCreateWithoutSolicitudInput[] | TipoArticuloPersonalizadoUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: TipoArticuloPersonalizadoCreateOrConnectWithoutSolicitudInput | TipoArticuloPersonalizadoCreateOrConnectWithoutSolicitudInput[]
    upsert?: TipoArticuloPersonalizadoUpsertWithWhereUniqueWithoutSolicitudInput | TipoArticuloPersonalizadoUpsertWithWhereUniqueWithoutSolicitudInput[]
    createMany?: TipoArticuloPersonalizadoCreateManySolicitudInputEnvelope
    set?: TipoArticuloPersonalizadoWhereUniqueInput | TipoArticuloPersonalizadoWhereUniqueInput[]
    disconnect?: TipoArticuloPersonalizadoWhereUniqueInput | TipoArticuloPersonalizadoWhereUniqueInput[]
    delete?: TipoArticuloPersonalizadoWhereUniqueInput | TipoArticuloPersonalizadoWhereUniqueInput[]
    connect?: TipoArticuloPersonalizadoWhereUniqueInput | TipoArticuloPersonalizadoWhereUniqueInput[]
    update?: TipoArticuloPersonalizadoUpdateWithWhereUniqueWithoutSolicitudInput | TipoArticuloPersonalizadoUpdateWithWhereUniqueWithoutSolicitudInput[]
    updateMany?: TipoArticuloPersonalizadoUpdateManyWithWhereWithoutSolicitudInput | TipoArticuloPersonalizadoUpdateManyWithWhereWithoutSolicitudInput[]
    deleteMany?: TipoArticuloPersonalizadoScalarWhereInput | TipoArticuloPersonalizadoScalarWhereInput[]
  }

  export type ArticuloSolicitudUncheckedUpdateManyWithoutSolicitudNestedInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutSolicitudInput, ArticuloSolicitudUncheckedCreateWithoutSolicitudInput> | ArticuloSolicitudCreateWithoutSolicitudInput[] | ArticuloSolicitudUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutSolicitudInput | ArticuloSolicitudCreateOrConnectWithoutSolicitudInput[]
    upsert?: ArticuloSolicitudUpsertWithWhereUniqueWithoutSolicitudInput | ArticuloSolicitudUpsertWithWhereUniqueWithoutSolicitudInput[]
    createMany?: ArticuloSolicitudCreateManySolicitudInputEnvelope
    set?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    disconnect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    delete?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    update?: ArticuloSolicitudUpdateWithWhereUniqueWithoutSolicitudInput | ArticuloSolicitudUpdateWithWhereUniqueWithoutSolicitudInput[]
    updateMany?: ArticuloSolicitudUpdateManyWithWhereWithoutSolicitudInput | ArticuloSolicitudUpdateManyWithWhereWithoutSolicitudInput[]
    deleteMany?: ArticuloSolicitudScalarWhereInput | ArticuloSolicitudScalarWhereInput[]
  }

  export type TipoArticuloPersonalizadoUncheckedUpdateManyWithoutSolicitudNestedInput = {
    create?: XOR<TipoArticuloPersonalizadoCreateWithoutSolicitudInput, TipoArticuloPersonalizadoUncheckedCreateWithoutSolicitudInput> | TipoArticuloPersonalizadoCreateWithoutSolicitudInput[] | TipoArticuloPersonalizadoUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: TipoArticuloPersonalizadoCreateOrConnectWithoutSolicitudInput | TipoArticuloPersonalizadoCreateOrConnectWithoutSolicitudInput[]
    upsert?: TipoArticuloPersonalizadoUpsertWithWhereUniqueWithoutSolicitudInput | TipoArticuloPersonalizadoUpsertWithWhereUniqueWithoutSolicitudInput[]
    createMany?: TipoArticuloPersonalizadoCreateManySolicitudInputEnvelope
    set?: TipoArticuloPersonalizadoWhereUniqueInput | TipoArticuloPersonalizadoWhereUniqueInput[]
    disconnect?: TipoArticuloPersonalizadoWhereUniqueInput | TipoArticuloPersonalizadoWhereUniqueInput[]
    delete?: TipoArticuloPersonalizadoWhereUniqueInput | TipoArticuloPersonalizadoWhereUniqueInput[]
    connect?: TipoArticuloPersonalizadoWhereUniqueInput | TipoArticuloPersonalizadoWhereUniqueInput[]
    update?: TipoArticuloPersonalizadoUpdateWithWhereUniqueWithoutSolicitudInput | TipoArticuloPersonalizadoUpdateWithWhereUniqueWithoutSolicitudInput[]
    updateMany?: TipoArticuloPersonalizadoUpdateManyWithWhereWithoutSolicitudInput | TipoArticuloPersonalizadoUpdateManyWithWhereWithoutSolicitudInput[]
    deleteMany?: TipoArticuloPersonalizadoScalarWhereInput | TipoArticuloPersonalizadoScalarWhereInput[]
  }

  export type SolicitudCreateNestedOneWithoutArticulosInput = {
    create?: XOR<SolicitudCreateWithoutArticulosInput, SolicitudUncheckedCreateWithoutArticulosInput>
    connectOrCreate?: SolicitudCreateOrConnectWithoutArticulosInput
    connect?: SolicitudWhereUniqueInput
  }

  export type TipoArticuloCreateNestedOneWithoutArticulosSolicitudInput = {
    create?: XOR<TipoArticuloCreateWithoutArticulosSolicitudInput, TipoArticuloUncheckedCreateWithoutArticulosSolicitudInput>
    connectOrCreate?: TipoArticuloCreateOrConnectWithoutArticulosSolicitudInput
    connect?: TipoArticuloWhereUniqueInput
  }

  export type TipoArticuloPersonalizadoCreateNestedOneWithoutArticuloSolicitudInput = {
    create?: XOR<TipoArticuloPersonalizadoCreateWithoutArticuloSolicitudInput, TipoArticuloPersonalizadoUncheckedCreateWithoutArticuloSolicitudInput>
    connectOrCreate?: TipoArticuloPersonalizadoCreateOrConnectWithoutArticuloSolicitudInput
    connect?: TipoArticuloPersonalizadoWhereUniqueInput
  }

  export type SolicitudUpdateOneRequiredWithoutArticulosNestedInput = {
    create?: XOR<SolicitudCreateWithoutArticulosInput, SolicitudUncheckedCreateWithoutArticulosInput>
    connectOrCreate?: SolicitudCreateOrConnectWithoutArticulosInput
    upsert?: SolicitudUpsertWithoutArticulosInput
    connect?: SolicitudWhereUniqueInput
    update?: XOR<XOR<SolicitudUpdateToOneWithWhereWithoutArticulosInput, SolicitudUpdateWithoutArticulosInput>, SolicitudUncheckedUpdateWithoutArticulosInput>
  }

  export type TipoArticuloUpdateOneWithoutArticulosSolicitudNestedInput = {
    create?: XOR<TipoArticuloCreateWithoutArticulosSolicitudInput, TipoArticuloUncheckedCreateWithoutArticulosSolicitudInput>
    connectOrCreate?: TipoArticuloCreateOrConnectWithoutArticulosSolicitudInput
    upsert?: TipoArticuloUpsertWithoutArticulosSolicitudInput
    disconnect?: TipoArticuloWhereInput | boolean
    delete?: TipoArticuloWhereInput | boolean
    connect?: TipoArticuloWhereUniqueInput
    update?: XOR<XOR<TipoArticuloUpdateToOneWithWhereWithoutArticulosSolicitudInput, TipoArticuloUpdateWithoutArticulosSolicitudInput>, TipoArticuloUncheckedUpdateWithoutArticulosSolicitudInput>
  }

  export type TipoArticuloPersonalizadoUpdateOneWithoutArticuloSolicitudNestedInput = {
    create?: XOR<TipoArticuloPersonalizadoCreateWithoutArticuloSolicitudInput, TipoArticuloPersonalizadoUncheckedCreateWithoutArticuloSolicitudInput>
    connectOrCreate?: TipoArticuloPersonalizadoCreateOrConnectWithoutArticuloSolicitudInput
    upsert?: TipoArticuloPersonalizadoUpsertWithoutArticuloSolicitudInput
    disconnect?: TipoArticuloPersonalizadoWhereInput | boolean
    delete?: TipoArticuloPersonalizadoWhereInput | boolean
    connect?: TipoArticuloPersonalizadoWhereUniqueInput
    update?: XOR<XOR<TipoArticuloPersonalizadoUpdateToOneWithWhereWithoutArticuloSolicitudInput, TipoArticuloPersonalizadoUpdateWithoutArticuloSolicitudInput>, TipoArticuloPersonalizadoUncheckedUpdateWithoutArticuloSolicitudInput>
  }

  export type ArticuloPeticionCreateNestedManyWithoutPeticionDonacionInput = {
    create?: XOR<ArticuloPeticionCreateWithoutPeticionDonacionInput, ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput> | ArticuloPeticionCreateWithoutPeticionDonacionInput[] | ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput[]
    connectOrCreate?: ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput | ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput[]
    createMany?: ArticuloPeticionCreateManyPeticionDonacionInputEnvelope
    connect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
  }

  export type ArticuloPeticionUncheckedCreateNestedManyWithoutPeticionDonacionInput = {
    create?: XOR<ArticuloPeticionCreateWithoutPeticionDonacionInput, ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput> | ArticuloPeticionCreateWithoutPeticionDonacionInput[] | ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput[]
    connectOrCreate?: ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput | ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput[]
    createMany?: ArticuloPeticionCreateManyPeticionDonacionInputEnvelope
    connect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArticuloPeticionUpdateManyWithoutPeticionDonacionNestedInput = {
    create?: XOR<ArticuloPeticionCreateWithoutPeticionDonacionInput, ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput> | ArticuloPeticionCreateWithoutPeticionDonacionInput[] | ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput[]
    connectOrCreate?: ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput | ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput[]
    upsert?: ArticuloPeticionUpsertWithWhereUniqueWithoutPeticionDonacionInput | ArticuloPeticionUpsertWithWhereUniqueWithoutPeticionDonacionInput[]
    createMany?: ArticuloPeticionCreateManyPeticionDonacionInputEnvelope
    set?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    disconnect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    delete?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    connect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    update?: ArticuloPeticionUpdateWithWhereUniqueWithoutPeticionDonacionInput | ArticuloPeticionUpdateWithWhereUniqueWithoutPeticionDonacionInput[]
    updateMany?: ArticuloPeticionUpdateManyWithWhereWithoutPeticionDonacionInput | ArticuloPeticionUpdateManyWithWhereWithoutPeticionDonacionInput[]
    deleteMany?: ArticuloPeticionScalarWhereInput | ArticuloPeticionScalarWhereInput[]
  }

  export type ArticuloPeticionUncheckedUpdateManyWithoutPeticionDonacionNestedInput = {
    create?: XOR<ArticuloPeticionCreateWithoutPeticionDonacionInput, ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput> | ArticuloPeticionCreateWithoutPeticionDonacionInput[] | ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput[]
    connectOrCreate?: ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput | ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput[]
    upsert?: ArticuloPeticionUpsertWithWhereUniqueWithoutPeticionDonacionInput | ArticuloPeticionUpsertWithWhereUniqueWithoutPeticionDonacionInput[]
    createMany?: ArticuloPeticionCreateManyPeticionDonacionInputEnvelope
    set?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    disconnect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    delete?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    connect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    update?: ArticuloPeticionUpdateWithWhereUniqueWithoutPeticionDonacionInput | ArticuloPeticionUpdateWithWhereUniqueWithoutPeticionDonacionInput[]
    updateMany?: ArticuloPeticionUpdateManyWithWhereWithoutPeticionDonacionInput | ArticuloPeticionUpdateManyWithWhereWithoutPeticionDonacionInput[]
    deleteMany?: ArticuloPeticionScalarWhereInput | ArticuloPeticionScalarWhereInput[]
  }

  export type PeticionDonacionCreateNestedOneWithoutArticulosInput = {
    create?: XOR<PeticionDonacionCreateWithoutArticulosInput, PeticionDonacionUncheckedCreateWithoutArticulosInput>
    connectOrCreate?: PeticionDonacionCreateOrConnectWithoutArticulosInput
    connect?: PeticionDonacionWhereUniqueInput
  }

  export type TipoArticuloCreateNestedOneWithoutArticulosPeticionInput = {
    create?: XOR<TipoArticuloCreateWithoutArticulosPeticionInput, TipoArticuloUncheckedCreateWithoutArticulosPeticionInput>
    connectOrCreate?: TipoArticuloCreateOrConnectWithoutArticulosPeticionInput
    connect?: TipoArticuloWhereUniqueInput
  }

  export type PeticionDonacionUpdateOneRequiredWithoutArticulosNestedInput = {
    create?: XOR<PeticionDonacionCreateWithoutArticulosInput, PeticionDonacionUncheckedCreateWithoutArticulosInput>
    connectOrCreate?: PeticionDonacionCreateOrConnectWithoutArticulosInput
    upsert?: PeticionDonacionUpsertWithoutArticulosInput
    connect?: PeticionDonacionWhereUniqueInput
    update?: XOR<XOR<PeticionDonacionUpdateToOneWithWhereWithoutArticulosInput, PeticionDonacionUpdateWithoutArticulosInput>, PeticionDonacionUncheckedUpdateWithoutArticulosInput>
  }

  export type TipoArticuloUpdateOneRequiredWithoutArticulosPeticionNestedInput = {
    create?: XOR<TipoArticuloCreateWithoutArticulosPeticionInput, TipoArticuloUncheckedCreateWithoutArticulosPeticionInput>
    connectOrCreate?: TipoArticuloCreateOrConnectWithoutArticulosPeticionInput
    upsert?: TipoArticuloUpsertWithoutArticulosPeticionInput
    connect?: TipoArticuloWhereUniqueInput
    update?: XOR<XOR<TipoArticuloUpdateToOneWithWhereWithoutArticulosPeticionInput, TipoArticuloUpdateWithoutArticulosPeticionInput>, TipoArticuloUncheckedUpdateWithoutArticulosPeticionInput>
  }

  export type SolicitudCreateNestedOneWithoutTiposArticuloPersonalizadosInput = {
    create?: XOR<SolicitudCreateWithoutTiposArticuloPersonalizadosInput, SolicitudUncheckedCreateWithoutTiposArticuloPersonalizadosInput>
    connectOrCreate?: SolicitudCreateOrConnectWithoutTiposArticuloPersonalizadosInput
    connect?: SolicitudWhereUniqueInput
  }

  export type ArticuloSolicitudCreateNestedManyWithoutTipoArticuloPersonalizadoInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutTipoArticuloPersonalizadoInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloPersonalizadoInput> | ArticuloSolicitudCreateWithoutTipoArticuloPersonalizadoInput[] | ArticuloSolicitudUncheckedCreateWithoutTipoArticuloPersonalizadoInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutTipoArticuloPersonalizadoInput | ArticuloSolicitudCreateOrConnectWithoutTipoArticuloPersonalizadoInput[]
    createMany?: ArticuloSolicitudCreateManyTipoArticuloPersonalizadoInputEnvelope
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
  }

  export type ArticuloSolicitudUncheckedCreateNestedManyWithoutTipoArticuloPersonalizadoInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutTipoArticuloPersonalizadoInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloPersonalizadoInput> | ArticuloSolicitudCreateWithoutTipoArticuloPersonalizadoInput[] | ArticuloSolicitudUncheckedCreateWithoutTipoArticuloPersonalizadoInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutTipoArticuloPersonalizadoInput | ArticuloSolicitudCreateOrConnectWithoutTipoArticuloPersonalizadoInput[]
    createMany?: ArticuloSolicitudCreateManyTipoArticuloPersonalizadoInputEnvelope
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
  }

  export type SolicitudUpdateOneRequiredWithoutTiposArticuloPersonalizadosNestedInput = {
    create?: XOR<SolicitudCreateWithoutTiposArticuloPersonalizadosInput, SolicitudUncheckedCreateWithoutTiposArticuloPersonalizadosInput>
    connectOrCreate?: SolicitudCreateOrConnectWithoutTiposArticuloPersonalizadosInput
    upsert?: SolicitudUpsertWithoutTiposArticuloPersonalizadosInput
    connect?: SolicitudWhereUniqueInput
    update?: XOR<XOR<SolicitudUpdateToOneWithWhereWithoutTiposArticuloPersonalizadosInput, SolicitudUpdateWithoutTiposArticuloPersonalizadosInput>, SolicitudUncheckedUpdateWithoutTiposArticuloPersonalizadosInput>
  }

  export type ArticuloSolicitudUpdateManyWithoutTipoArticuloPersonalizadoNestedInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutTipoArticuloPersonalizadoInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloPersonalizadoInput> | ArticuloSolicitudCreateWithoutTipoArticuloPersonalizadoInput[] | ArticuloSolicitudUncheckedCreateWithoutTipoArticuloPersonalizadoInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutTipoArticuloPersonalizadoInput | ArticuloSolicitudCreateOrConnectWithoutTipoArticuloPersonalizadoInput[]
    upsert?: ArticuloSolicitudUpsertWithWhereUniqueWithoutTipoArticuloPersonalizadoInput | ArticuloSolicitudUpsertWithWhereUniqueWithoutTipoArticuloPersonalizadoInput[]
    createMany?: ArticuloSolicitudCreateManyTipoArticuloPersonalizadoInputEnvelope
    set?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    disconnect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    delete?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    update?: ArticuloSolicitudUpdateWithWhereUniqueWithoutTipoArticuloPersonalizadoInput | ArticuloSolicitudUpdateWithWhereUniqueWithoutTipoArticuloPersonalizadoInput[]
    updateMany?: ArticuloSolicitudUpdateManyWithWhereWithoutTipoArticuloPersonalizadoInput | ArticuloSolicitudUpdateManyWithWhereWithoutTipoArticuloPersonalizadoInput[]
    deleteMany?: ArticuloSolicitudScalarWhereInput | ArticuloSolicitudScalarWhereInput[]
  }

  export type ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloPersonalizadoNestedInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutTipoArticuloPersonalizadoInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloPersonalizadoInput> | ArticuloSolicitudCreateWithoutTipoArticuloPersonalizadoInput[] | ArticuloSolicitudUncheckedCreateWithoutTipoArticuloPersonalizadoInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutTipoArticuloPersonalizadoInput | ArticuloSolicitudCreateOrConnectWithoutTipoArticuloPersonalizadoInput[]
    upsert?: ArticuloSolicitudUpsertWithWhereUniqueWithoutTipoArticuloPersonalizadoInput | ArticuloSolicitudUpsertWithWhereUniqueWithoutTipoArticuloPersonalizadoInput[]
    createMany?: ArticuloSolicitudCreateManyTipoArticuloPersonalizadoInputEnvelope
    set?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    disconnect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    delete?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    update?: ArticuloSolicitudUpdateWithWhereUniqueWithoutTipoArticuloPersonalizadoInput | ArticuloSolicitudUpdateWithWhereUniqueWithoutTipoArticuloPersonalizadoInput[]
    updateMany?: ArticuloSolicitudUpdateManyWithWhereWithoutTipoArticuloPersonalizadoInput | ArticuloSolicitudUpdateManyWithWhereWithoutTipoArticuloPersonalizadoInput[]
    deleteMany?: ArticuloSolicitudScalarWhereInput | ArticuloSolicitudScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ArticuloOfertaCreateWithoutTipoArticuloInput = {
    cantidad?: number | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    puntoDonacion: PuntoDonacionCreateNestedOneWithoutArticulosInput
  }

  export type ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput = {
    id?: number
    puntoDonacionId: number
    cantidad?: number | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput = {
    where: ArticuloOfertaWhereUniqueInput
    create: XOR<ArticuloOfertaCreateWithoutTipoArticuloInput, ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput>
  }

  export type ArticuloOfertaCreateManyTipoArticuloInputEnvelope = {
    data: ArticuloOfertaCreateManyTipoArticuloInput | ArticuloOfertaCreateManyTipoArticuloInput[]
    skipDuplicates?: boolean
  }

  export type ArticuloPeticionCreateWithoutTipoArticuloInput = {
    cantidad: number
    creadoEn?: Date | string
    peticionDonacion: PeticionDonacionCreateNestedOneWithoutArticulosInput
  }

  export type ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput = {
    id?: number
    peticionDonacionId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput = {
    where: ArticuloPeticionWhereUniqueInput
    create: XOR<ArticuloPeticionCreateWithoutTipoArticuloInput, ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput>
  }

  export type ArticuloPeticionCreateManyTipoArticuloInputEnvelope = {
    data: ArticuloPeticionCreateManyTipoArticuloInput | ArticuloPeticionCreateManyTipoArticuloInput[]
    skipDuplicates?: boolean
  }

  export type ArticuloSolicitudCreateWithoutTipoArticuloInput = {
    cantidad: number
    creadoEn?: Date | string
    solicitud: SolicitudCreateNestedOneWithoutArticulosInput
    tipoArticuloPersonalizado?: TipoArticuloPersonalizadoCreateNestedOneWithoutArticuloSolicitudInput
  }

  export type ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput = {
    id?: number
    solicitudId: number
    tipoArticuloPersonalizadoId?: number | null
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput = {
    where: ArticuloSolicitudWhereUniqueInput
    create: XOR<ArticuloSolicitudCreateWithoutTipoArticuloInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput>
  }

  export type ArticuloSolicitudCreateManyTipoArticuloInputEnvelope = {
    data: ArticuloSolicitudCreateManyTipoArticuloInput | ArticuloSolicitudCreateManyTipoArticuloInput[]
    skipDuplicates?: boolean
  }

  export type ArticuloOfertaUpsertWithWhereUniqueWithoutTipoArticuloInput = {
    where: ArticuloOfertaWhereUniqueInput
    update: XOR<ArticuloOfertaUpdateWithoutTipoArticuloInput, ArticuloOfertaUncheckedUpdateWithoutTipoArticuloInput>
    create: XOR<ArticuloOfertaCreateWithoutTipoArticuloInput, ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput>
  }

  export type ArticuloOfertaUpdateWithWhereUniqueWithoutTipoArticuloInput = {
    where: ArticuloOfertaWhereUniqueInput
    data: XOR<ArticuloOfertaUpdateWithoutTipoArticuloInput, ArticuloOfertaUncheckedUpdateWithoutTipoArticuloInput>
  }

  export type ArticuloOfertaUpdateManyWithWhereWithoutTipoArticuloInput = {
    where: ArticuloOfertaScalarWhereInput
    data: XOR<ArticuloOfertaUpdateManyMutationInput, ArticuloOfertaUncheckedUpdateManyWithoutTipoArticuloInput>
  }

  export type ArticuloOfertaScalarWhereInput = {
    AND?: ArticuloOfertaScalarWhereInput | ArticuloOfertaScalarWhereInput[]
    OR?: ArticuloOfertaScalarWhereInput[]
    NOT?: ArticuloOfertaScalarWhereInput | ArticuloOfertaScalarWhereInput[]
    id?: IntFilter<"ArticuloOferta"> | number
    puntoDonacionId?: IntFilter<"ArticuloOferta"> | number
    tipoArticuloId?: IntFilter<"ArticuloOferta"> | number
    cantidad?: IntNullableFilter<"ArticuloOferta"> | number | null
    estado?: StringFilter<"ArticuloOferta"> | string
    creadoEn?: DateTimeFilter<"ArticuloOferta"> | Date | string
    actualizadoEn?: DateTimeFilter<"ArticuloOferta"> | Date | string
  }

  export type ArticuloPeticionUpsertWithWhereUniqueWithoutTipoArticuloInput = {
    where: ArticuloPeticionWhereUniqueInput
    update: XOR<ArticuloPeticionUpdateWithoutTipoArticuloInput, ArticuloPeticionUncheckedUpdateWithoutTipoArticuloInput>
    create: XOR<ArticuloPeticionCreateWithoutTipoArticuloInput, ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput>
  }

  export type ArticuloPeticionUpdateWithWhereUniqueWithoutTipoArticuloInput = {
    where: ArticuloPeticionWhereUniqueInput
    data: XOR<ArticuloPeticionUpdateWithoutTipoArticuloInput, ArticuloPeticionUncheckedUpdateWithoutTipoArticuloInput>
  }

  export type ArticuloPeticionUpdateManyWithWhereWithoutTipoArticuloInput = {
    where: ArticuloPeticionScalarWhereInput
    data: XOR<ArticuloPeticionUpdateManyMutationInput, ArticuloPeticionUncheckedUpdateManyWithoutTipoArticuloInput>
  }

  export type ArticuloPeticionScalarWhereInput = {
    AND?: ArticuloPeticionScalarWhereInput | ArticuloPeticionScalarWhereInput[]
    OR?: ArticuloPeticionScalarWhereInput[]
    NOT?: ArticuloPeticionScalarWhereInput | ArticuloPeticionScalarWhereInput[]
    id?: IntFilter<"ArticuloPeticion"> | number
    peticionDonacionId?: IntFilter<"ArticuloPeticion"> | number
    tipoArticuloId?: IntFilter<"ArticuloPeticion"> | number
    cantidad?: IntFilter<"ArticuloPeticion"> | number
    creadoEn?: DateTimeFilter<"ArticuloPeticion"> | Date | string
  }

  export type ArticuloSolicitudUpsertWithWhereUniqueWithoutTipoArticuloInput = {
    where: ArticuloSolicitudWhereUniqueInput
    update: XOR<ArticuloSolicitudUpdateWithoutTipoArticuloInput, ArticuloSolicitudUncheckedUpdateWithoutTipoArticuloInput>
    create: XOR<ArticuloSolicitudCreateWithoutTipoArticuloInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput>
  }

  export type ArticuloSolicitudUpdateWithWhereUniqueWithoutTipoArticuloInput = {
    where: ArticuloSolicitudWhereUniqueInput
    data: XOR<ArticuloSolicitudUpdateWithoutTipoArticuloInput, ArticuloSolicitudUncheckedUpdateWithoutTipoArticuloInput>
  }

  export type ArticuloSolicitudUpdateManyWithWhereWithoutTipoArticuloInput = {
    where: ArticuloSolicitudScalarWhereInput
    data: XOR<ArticuloSolicitudUpdateManyMutationInput, ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloInput>
  }

  export type ArticuloSolicitudScalarWhereInput = {
    AND?: ArticuloSolicitudScalarWhereInput | ArticuloSolicitudScalarWhereInput[]
    OR?: ArticuloSolicitudScalarWhereInput[]
    NOT?: ArticuloSolicitudScalarWhereInput | ArticuloSolicitudScalarWhereInput[]
    id?: IntFilter<"ArticuloSolicitud"> | number
    solicitudId?: IntFilter<"ArticuloSolicitud"> | number
    tipoArticuloId?: IntNullableFilter<"ArticuloSolicitud"> | number | null
    tipoArticuloPersonalizadoId?: IntNullableFilter<"ArticuloSolicitud"> | number | null
    cantidad?: IntFilter<"ArticuloSolicitud"> | number
    creadoEn?: DateTimeFilter<"ArticuloSolicitud"> | Date | string
  }

  export type ArticuloOfertaCreateWithoutPuntoDonacionInput = {
    cantidad?: number | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    tipoArticulo: TipoArticuloCreateNestedOneWithoutArticulosOfertaInput
  }

  export type ArticuloOfertaUncheckedCreateWithoutPuntoDonacionInput = {
    id?: number
    tipoArticuloId: number
    cantidad?: number | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ArticuloOfertaCreateOrConnectWithoutPuntoDonacionInput = {
    where: ArticuloOfertaWhereUniqueInput
    create: XOR<ArticuloOfertaCreateWithoutPuntoDonacionInput, ArticuloOfertaUncheckedCreateWithoutPuntoDonacionInput>
  }

  export type ArticuloOfertaCreateManyPuntoDonacionInputEnvelope = {
    data: ArticuloOfertaCreateManyPuntoDonacionInput | ArticuloOfertaCreateManyPuntoDonacionInput[]
    skipDuplicates?: boolean
  }

  export type ArticuloOfertaUpsertWithWhereUniqueWithoutPuntoDonacionInput = {
    where: ArticuloOfertaWhereUniqueInput
    update: XOR<ArticuloOfertaUpdateWithoutPuntoDonacionInput, ArticuloOfertaUncheckedUpdateWithoutPuntoDonacionInput>
    create: XOR<ArticuloOfertaCreateWithoutPuntoDonacionInput, ArticuloOfertaUncheckedCreateWithoutPuntoDonacionInput>
  }

  export type ArticuloOfertaUpdateWithWhereUniqueWithoutPuntoDonacionInput = {
    where: ArticuloOfertaWhereUniqueInput
    data: XOR<ArticuloOfertaUpdateWithoutPuntoDonacionInput, ArticuloOfertaUncheckedUpdateWithoutPuntoDonacionInput>
  }

  export type ArticuloOfertaUpdateManyWithWhereWithoutPuntoDonacionInput = {
    where: ArticuloOfertaScalarWhereInput
    data: XOR<ArticuloOfertaUpdateManyMutationInput, ArticuloOfertaUncheckedUpdateManyWithoutPuntoDonacionInput>
  }

  export type PuntoDonacionCreateWithoutArticulosInput = {
    nombre?: string | null
    direccion: string
    responsable: string
    telefono?: string | null
    latitud: number
    longitud: number
    horarioApertura?: string | null
    horarioCierre?: string | null
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PuntoDonacionUncheckedCreateWithoutArticulosInput = {
    id?: number
    nombre?: string | null
    direccion: string
    responsable: string
    telefono?: string | null
    latitud: number
    longitud: number
    horarioApertura?: string | null
    horarioCierre?: string | null
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PuntoDonacionCreateOrConnectWithoutArticulosInput = {
    where: PuntoDonacionWhereUniqueInput
    create: XOR<PuntoDonacionCreateWithoutArticulosInput, PuntoDonacionUncheckedCreateWithoutArticulosInput>
  }

  export type TipoArticuloCreateWithoutArticulosOfertaInput = {
    nombre: string
    creadoEn?: Date | string
    articulosPeticion?: ArticuloPeticionCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitud?: ArticuloSolicitudCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloUncheckedCreateWithoutArticulosOfertaInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
    articulosPeticion?: ArticuloPeticionUncheckedCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitud?: ArticuloSolicitudUncheckedCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloCreateOrConnectWithoutArticulosOfertaInput = {
    where: TipoArticuloWhereUniqueInput
    create: XOR<TipoArticuloCreateWithoutArticulosOfertaInput, TipoArticuloUncheckedCreateWithoutArticulosOfertaInput>
  }

  export type PuntoDonacionUpsertWithoutArticulosInput = {
    update: XOR<PuntoDonacionUpdateWithoutArticulosInput, PuntoDonacionUncheckedUpdateWithoutArticulosInput>
    create: XOR<PuntoDonacionCreateWithoutArticulosInput, PuntoDonacionUncheckedCreateWithoutArticulosInput>
    where?: PuntoDonacionWhereInput
  }

  export type PuntoDonacionUpdateToOneWithWhereWithoutArticulosInput = {
    where?: PuntoDonacionWhereInput
    data: XOR<PuntoDonacionUpdateWithoutArticulosInput, PuntoDonacionUncheckedUpdateWithoutArticulosInput>
  }

  export type PuntoDonacionUpdateWithoutArticulosInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PuntoDonacionUncheckedUpdateWithoutArticulosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoArticuloUpsertWithoutArticulosOfertaInput = {
    update: XOR<TipoArticuloUpdateWithoutArticulosOfertaInput, TipoArticuloUncheckedUpdateWithoutArticulosOfertaInput>
    create: XOR<TipoArticuloCreateWithoutArticulosOfertaInput, TipoArticuloUncheckedCreateWithoutArticulosOfertaInput>
    where?: TipoArticuloWhereInput
  }

  export type TipoArticuloUpdateToOneWithWhereWithoutArticulosOfertaInput = {
    where?: TipoArticuloWhereInput
    data: XOR<TipoArticuloUpdateWithoutArticulosOfertaInput, TipoArticuloUncheckedUpdateWithoutArticulosOfertaInput>
  }

  export type TipoArticuloUpdateWithoutArticulosOfertaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosPeticion?: ArticuloPeticionUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitud?: ArticuloSolicitudUpdateManyWithoutTipoArticuloNestedInput
  }

  export type TipoArticuloUncheckedUpdateWithoutArticulosOfertaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosPeticion?: ArticuloPeticionUncheckedUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitud?: ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloNestedInput
  }

  export type ArticuloSolicitudCreateWithoutSolicitudInput = {
    cantidad: number
    creadoEn?: Date | string
    tipoArticulo?: TipoArticuloCreateNestedOneWithoutArticulosSolicitudInput
    tipoArticuloPersonalizado?: TipoArticuloPersonalizadoCreateNestedOneWithoutArticuloSolicitudInput
  }

  export type ArticuloSolicitudUncheckedCreateWithoutSolicitudInput = {
    id?: number
    tipoArticuloId?: number | null
    tipoArticuloPersonalizadoId?: number | null
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloSolicitudCreateOrConnectWithoutSolicitudInput = {
    where: ArticuloSolicitudWhereUniqueInput
    create: XOR<ArticuloSolicitudCreateWithoutSolicitudInput, ArticuloSolicitudUncheckedCreateWithoutSolicitudInput>
  }

  export type ArticuloSolicitudCreateManySolicitudInputEnvelope = {
    data: ArticuloSolicitudCreateManySolicitudInput | ArticuloSolicitudCreateManySolicitudInput[]
    skipDuplicates?: boolean
  }

  export type TipoArticuloPersonalizadoCreateWithoutSolicitudInput = {
    nombre: string
    creadoEn?: Date | string
    ArticuloSolicitud?: ArticuloSolicitudCreateNestedManyWithoutTipoArticuloPersonalizadoInput
  }

  export type TipoArticuloPersonalizadoUncheckedCreateWithoutSolicitudInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
    ArticuloSolicitud?: ArticuloSolicitudUncheckedCreateNestedManyWithoutTipoArticuloPersonalizadoInput
  }

  export type TipoArticuloPersonalizadoCreateOrConnectWithoutSolicitudInput = {
    where: TipoArticuloPersonalizadoWhereUniqueInput
    create: XOR<TipoArticuloPersonalizadoCreateWithoutSolicitudInput, TipoArticuloPersonalizadoUncheckedCreateWithoutSolicitudInput>
  }

  export type TipoArticuloPersonalizadoCreateManySolicitudInputEnvelope = {
    data: TipoArticuloPersonalizadoCreateManySolicitudInput | TipoArticuloPersonalizadoCreateManySolicitudInput[]
    skipDuplicates?: boolean
  }

  export type ArticuloSolicitudUpsertWithWhereUniqueWithoutSolicitudInput = {
    where: ArticuloSolicitudWhereUniqueInput
    update: XOR<ArticuloSolicitudUpdateWithoutSolicitudInput, ArticuloSolicitudUncheckedUpdateWithoutSolicitudInput>
    create: XOR<ArticuloSolicitudCreateWithoutSolicitudInput, ArticuloSolicitudUncheckedCreateWithoutSolicitudInput>
  }

  export type ArticuloSolicitudUpdateWithWhereUniqueWithoutSolicitudInput = {
    where: ArticuloSolicitudWhereUniqueInput
    data: XOR<ArticuloSolicitudUpdateWithoutSolicitudInput, ArticuloSolicitudUncheckedUpdateWithoutSolicitudInput>
  }

  export type ArticuloSolicitudUpdateManyWithWhereWithoutSolicitudInput = {
    where: ArticuloSolicitudScalarWhereInput
    data: XOR<ArticuloSolicitudUpdateManyMutationInput, ArticuloSolicitudUncheckedUpdateManyWithoutSolicitudInput>
  }

  export type TipoArticuloPersonalizadoUpsertWithWhereUniqueWithoutSolicitudInput = {
    where: TipoArticuloPersonalizadoWhereUniqueInput
    update: XOR<TipoArticuloPersonalizadoUpdateWithoutSolicitudInput, TipoArticuloPersonalizadoUncheckedUpdateWithoutSolicitudInput>
    create: XOR<TipoArticuloPersonalizadoCreateWithoutSolicitudInput, TipoArticuloPersonalizadoUncheckedCreateWithoutSolicitudInput>
  }

  export type TipoArticuloPersonalizadoUpdateWithWhereUniqueWithoutSolicitudInput = {
    where: TipoArticuloPersonalizadoWhereUniqueInput
    data: XOR<TipoArticuloPersonalizadoUpdateWithoutSolicitudInput, TipoArticuloPersonalizadoUncheckedUpdateWithoutSolicitudInput>
  }

  export type TipoArticuloPersonalizadoUpdateManyWithWhereWithoutSolicitudInput = {
    where: TipoArticuloPersonalizadoScalarWhereInput
    data: XOR<TipoArticuloPersonalizadoUpdateManyMutationInput, TipoArticuloPersonalizadoUncheckedUpdateManyWithoutSolicitudInput>
  }

  export type TipoArticuloPersonalizadoScalarWhereInput = {
    AND?: TipoArticuloPersonalizadoScalarWhereInput | TipoArticuloPersonalizadoScalarWhereInput[]
    OR?: TipoArticuloPersonalizadoScalarWhereInput[]
    NOT?: TipoArticuloPersonalizadoScalarWhereInput | TipoArticuloPersonalizadoScalarWhereInput[]
    id?: IntFilter<"TipoArticuloPersonalizado"> | number
    nombre?: StringFilter<"TipoArticuloPersonalizado"> | string
    solicitudId?: IntFilter<"TipoArticuloPersonalizado"> | number
    creadoEn?: DateTimeFilter<"TipoArticuloPersonalizado"> | Date | string
  }

  export type SolicitudCreateWithoutArticulosInput = {
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado?: string
    latitud: number
    longitud: number
    descripcion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    tiposArticuloPersonalizados?: TipoArticuloPersonalizadoCreateNestedManyWithoutSolicitudInput
  }

  export type SolicitudUncheckedCreateWithoutArticulosInput = {
    id?: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado?: string
    latitud: number
    longitud: number
    descripcion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    tiposArticuloPersonalizados?: TipoArticuloPersonalizadoUncheckedCreateNestedManyWithoutSolicitudInput
  }

  export type SolicitudCreateOrConnectWithoutArticulosInput = {
    where: SolicitudWhereUniqueInput
    create: XOR<SolicitudCreateWithoutArticulosInput, SolicitudUncheckedCreateWithoutArticulosInput>
  }

  export type TipoArticuloCreateWithoutArticulosSolicitudInput = {
    nombre: string
    creadoEn?: Date | string
    articulosOferta?: ArticuloOfertaCreateNestedManyWithoutTipoArticuloInput
    articulosPeticion?: ArticuloPeticionCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloUncheckedCreateWithoutArticulosSolicitudInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
    articulosOferta?: ArticuloOfertaUncheckedCreateNestedManyWithoutTipoArticuloInput
    articulosPeticion?: ArticuloPeticionUncheckedCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloCreateOrConnectWithoutArticulosSolicitudInput = {
    where: TipoArticuloWhereUniqueInput
    create: XOR<TipoArticuloCreateWithoutArticulosSolicitudInput, TipoArticuloUncheckedCreateWithoutArticulosSolicitudInput>
  }

  export type TipoArticuloPersonalizadoCreateWithoutArticuloSolicitudInput = {
    nombre: string
    creadoEn?: Date | string
    solicitud: SolicitudCreateNestedOneWithoutTiposArticuloPersonalizadosInput
  }

  export type TipoArticuloPersonalizadoUncheckedCreateWithoutArticuloSolicitudInput = {
    id?: number
    nombre: string
    solicitudId: number
    creadoEn?: Date | string
  }

  export type TipoArticuloPersonalizadoCreateOrConnectWithoutArticuloSolicitudInput = {
    where: TipoArticuloPersonalizadoWhereUniqueInput
    create: XOR<TipoArticuloPersonalizadoCreateWithoutArticuloSolicitudInput, TipoArticuloPersonalizadoUncheckedCreateWithoutArticuloSolicitudInput>
  }

  export type SolicitudUpsertWithoutArticulosInput = {
    update: XOR<SolicitudUpdateWithoutArticulosInput, SolicitudUncheckedUpdateWithoutArticulosInput>
    create: XOR<SolicitudCreateWithoutArticulosInput, SolicitudUncheckedCreateWithoutArticulosInput>
    where?: SolicitudWhereInput
  }

  export type SolicitudUpdateToOneWithWhereWithoutArticulosInput = {
    where?: SolicitudWhereInput
    data: XOR<SolicitudUpdateWithoutArticulosInput, SolicitudUncheckedUpdateWithoutArticulosInput>
  }

  export type SolicitudUpdateWithoutArticulosInput = {
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    tiposArticuloPersonalizados?: TipoArticuloPersonalizadoUpdateManyWithoutSolicitudNestedInput
  }

  export type SolicitudUncheckedUpdateWithoutArticulosInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    tiposArticuloPersonalizados?: TipoArticuloPersonalizadoUncheckedUpdateManyWithoutSolicitudNestedInput
  }

  export type TipoArticuloUpsertWithoutArticulosSolicitudInput = {
    update: XOR<TipoArticuloUpdateWithoutArticulosSolicitudInput, TipoArticuloUncheckedUpdateWithoutArticulosSolicitudInput>
    create: XOR<TipoArticuloCreateWithoutArticulosSolicitudInput, TipoArticuloUncheckedCreateWithoutArticulosSolicitudInput>
    where?: TipoArticuloWhereInput
  }

  export type TipoArticuloUpdateToOneWithWhereWithoutArticulosSolicitudInput = {
    where?: TipoArticuloWhereInput
    data: XOR<TipoArticuloUpdateWithoutArticulosSolicitudInput, TipoArticuloUncheckedUpdateWithoutArticulosSolicitudInput>
  }

  export type TipoArticuloUpdateWithoutArticulosSolicitudInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosOferta?: ArticuloOfertaUpdateManyWithoutTipoArticuloNestedInput
    articulosPeticion?: ArticuloPeticionUpdateManyWithoutTipoArticuloNestedInput
  }

  export type TipoArticuloUncheckedUpdateWithoutArticulosSolicitudInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosOferta?: ArticuloOfertaUncheckedUpdateManyWithoutTipoArticuloNestedInput
    articulosPeticion?: ArticuloPeticionUncheckedUpdateManyWithoutTipoArticuloNestedInput
  }

  export type TipoArticuloPersonalizadoUpsertWithoutArticuloSolicitudInput = {
    update: XOR<TipoArticuloPersonalizadoUpdateWithoutArticuloSolicitudInput, TipoArticuloPersonalizadoUncheckedUpdateWithoutArticuloSolicitudInput>
    create: XOR<TipoArticuloPersonalizadoCreateWithoutArticuloSolicitudInput, TipoArticuloPersonalizadoUncheckedCreateWithoutArticuloSolicitudInput>
    where?: TipoArticuloPersonalizadoWhereInput
  }

  export type TipoArticuloPersonalizadoUpdateToOneWithWhereWithoutArticuloSolicitudInput = {
    where?: TipoArticuloPersonalizadoWhereInput
    data: XOR<TipoArticuloPersonalizadoUpdateWithoutArticuloSolicitudInput, TipoArticuloPersonalizadoUncheckedUpdateWithoutArticuloSolicitudInput>
  }

  export type TipoArticuloPersonalizadoUpdateWithoutArticuloSolicitudInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitud?: SolicitudUpdateOneRequiredWithoutTiposArticuloPersonalizadosNestedInput
  }

  export type TipoArticuloPersonalizadoUncheckedUpdateWithoutArticuloSolicitudInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    solicitudId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloPeticionCreateWithoutPeticionDonacionInput = {
    cantidad: number
    creadoEn?: Date | string
    tipoArticulo: TipoArticuloCreateNestedOneWithoutArticulosPeticionInput
  }

  export type ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput = {
    id?: number
    tipoArticuloId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput = {
    where: ArticuloPeticionWhereUniqueInput
    create: XOR<ArticuloPeticionCreateWithoutPeticionDonacionInput, ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput>
  }

  export type ArticuloPeticionCreateManyPeticionDonacionInputEnvelope = {
    data: ArticuloPeticionCreateManyPeticionDonacionInput | ArticuloPeticionCreateManyPeticionDonacionInput[]
    skipDuplicates?: boolean
  }

  export type ArticuloPeticionUpsertWithWhereUniqueWithoutPeticionDonacionInput = {
    where: ArticuloPeticionWhereUniqueInput
    update: XOR<ArticuloPeticionUpdateWithoutPeticionDonacionInput, ArticuloPeticionUncheckedUpdateWithoutPeticionDonacionInput>
    create: XOR<ArticuloPeticionCreateWithoutPeticionDonacionInput, ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput>
  }

  export type ArticuloPeticionUpdateWithWhereUniqueWithoutPeticionDonacionInput = {
    where: ArticuloPeticionWhereUniqueInput
    data: XOR<ArticuloPeticionUpdateWithoutPeticionDonacionInput, ArticuloPeticionUncheckedUpdateWithoutPeticionDonacionInput>
  }

  export type ArticuloPeticionUpdateManyWithWhereWithoutPeticionDonacionInput = {
    where: ArticuloPeticionScalarWhereInput
    data: XOR<ArticuloPeticionUpdateManyMutationInput, ArticuloPeticionUncheckedUpdateManyWithoutPeticionDonacionInput>
  }

  export type PeticionDonacionCreateWithoutArticulosInput = {
    direccion: string
    contactoNombre: string
    contactoTel: string
    latitud?: number | null
    longitud?: number | null
    descripcion?: string | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PeticionDonacionUncheckedCreateWithoutArticulosInput = {
    id?: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    latitud?: number | null
    longitud?: number | null
    descripcion?: string | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PeticionDonacionCreateOrConnectWithoutArticulosInput = {
    where: PeticionDonacionWhereUniqueInput
    create: XOR<PeticionDonacionCreateWithoutArticulosInput, PeticionDonacionUncheckedCreateWithoutArticulosInput>
  }

  export type TipoArticuloCreateWithoutArticulosPeticionInput = {
    nombre: string
    creadoEn?: Date | string
    articulosOferta?: ArticuloOfertaCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitud?: ArticuloSolicitudCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloUncheckedCreateWithoutArticulosPeticionInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
    articulosOferta?: ArticuloOfertaUncheckedCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitud?: ArticuloSolicitudUncheckedCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloCreateOrConnectWithoutArticulosPeticionInput = {
    where: TipoArticuloWhereUniqueInput
    create: XOR<TipoArticuloCreateWithoutArticulosPeticionInput, TipoArticuloUncheckedCreateWithoutArticulosPeticionInput>
  }

  export type PeticionDonacionUpsertWithoutArticulosInput = {
    update: XOR<PeticionDonacionUpdateWithoutArticulosInput, PeticionDonacionUncheckedUpdateWithoutArticulosInput>
    create: XOR<PeticionDonacionCreateWithoutArticulosInput, PeticionDonacionUncheckedCreateWithoutArticulosInput>
    where?: PeticionDonacionWhereInput
  }

  export type PeticionDonacionUpdateToOneWithWhereWithoutArticulosInput = {
    where?: PeticionDonacionWhereInput
    data: XOR<PeticionDonacionUpdateWithoutArticulosInput, PeticionDonacionUncheckedUpdateWithoutArticulosInput>
  }

  export type PeticionDonacionUpdateWithoutArticulosInput = {
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeticionDonacionUncheckedUpdateWithoutArticulosInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoArticuloUpsertWithoutArticulosPeticionInput = {
    update: XOR<TipoArticuloUpdateWithoutArticulosPeticionInput, TipoArticuloUncheckedUpdateWithoutArticulosPeticionInput>
    create: XOR<TipoArticuloCreateWithoutArticulosPeticionInput, TipoArticuloUncheckedCreateWithoutArticulosPeticionInput>
    where?: TipoArticuloWhereInput
  }

  export type TipoArticuloUpdateToOneWithWhereWithoutArticulosPeticionInput = {
    where?: TipoArticuloWhereInput
    data: XOR<TipoArticuloUpdateWithoutArticulosPeticionInput, TipoArticuloUncheckedUpdateWithoutArticulosPeticionInput>
  }

  export type TipoArticuloUpdateWithoutArticulosPeticionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosOferta?: ArticuloOfertaUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitud?: ArticuloSolicitudUpdateManyWithoutTipoArticuloNestedInput
  }

  export type TipoArticuloUncheckedUpdateWithoutArticulosPeticionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosOferta?: ArticuloOfertaUncheckedUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitud?: ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloNestedInput
  }

  export type SolicitudCreateWithoutTiposArticuloPersonalizadosInput = {
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado?: string
    latitud: number
    longitud: number
    descripcion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    articulos?: ArticuloSolicitudCreateNestedManyWithoutSolicitudInput
  }

  export type SolicitudUncheckedCreateWithoutTiposArticuloPersonalizadosInput = {
    id?: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado?: string
    latitud: number
    longitud: number
    descripcion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    articulos?: ArticuloSolicitudUncheckedCreateNestedManyWithoutSolicitudInput
  }

  export type SolicitudCreateOrConnectWithoutTiposArticuloPersonalizadosInput = {
    where: SolicitudWhereUniqueInput
    create: XOR<SolicitudCreateWithoutTiposArticuloPersonalizadosInput, SolicitudUncheckedCreateWithoutTiposArticuloPersonalizadosInput>
  }

  export type ArticuloSolicitudCreateWithoutTipoArticuloPersonalizadoInput = {
    cantidad: number
    creadoEn?: Date | string
    solicitud: SolicitudCreateNestedOneWithoutArticulosInput
    tipoArticulo?: TipoArticuloCreateNestedOneWithoutArticulosSolicitudInput
  }

  export type ArticuloSolicitudUncheckedCreateWithoutTipoArticuloPersonalizadoInput = {
    id?: number
    solicitudId: number
    tipoArticuloId?: number | null
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloSolicitudCreateOrConnectWithoutTipoArticuloPersonalizadoInput = {
    where: ArticuloSolicitudWhereUniqueInput
    create: XOR<ArticuloSolicitudCreateWithoutTipoArticuloPersonalizadoInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloPersonalizadoInput>
  }

  export type ArticuloSolicitudCreateManyTipoArticuloPersonalizadoInputEnvelope = {
    data: ArticuloSolicitudCreateManyTipoArticuloPersonalizadoInput | ArticuloSolicitudCreateManyTipoArticuloPersonalizadoInput[]
    skipDuplicates?: boolean
  }

  export type SolicitudUpsertWithoutTiposArticuloPersonalizadosInput = {
    update: XOR<SolicitudUpdateWithoutTiposArticuloPersonalizadosInput, SolicitudUncheckedUpdateWithoutTiposArticuloPersonalizadosInput>
    create: XOR<SolicitudCreateWithoutTiposArticuloPersonalizadosInput, SolicitudUncheckedCreateWithoutTiposArticuloPersonalizadosInput>
    where?: SolicitudWhereInput
  }

  export type SolicitudUpdateToOneWithWhereWithoutTiposArticuloPersonalizadosInput = {
    where?: SolicitudWhereInput
    data: XOR<SolicitudUpdateWithoutTiposArticuloPersonalizadosInput, SolicitudUncheckedUpdateWithoutTiposArticuloPersonalizadosInput>
  }

  export type SolicitudUpdateWithoutTiposArticuloPersonalizadosInput = {
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulos?: ArticuloSolicitudUpdateManyWithoutSolicitudNestedInput
  }

  export type SolicitudUncheckedUpdateWithoutTiposArticuloPersonalizadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulos?: ArticuloSolicitudUncheckedUpdateManyWithoutSolicitudNestedInput
  }

  export type ArticuloSolicitudUpsertWithWhereUniqueWithoutTipoArticuloPersonalizadoInput = {
    where: ArticuloSolicitudWhereUniqueInput
    update: XOR<ArticuloSolicitudUpdateWithoutTipoArticuloPersonalizadoInput, ArticuloSolicitudUncheckedUpdateWithoutTipoArticuloPersonalizadoInput>
    create: XOR<ArticuloSolicitudCreateWithoutTipoArticuloPersonalizadoInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloPersonalizadoInput>
  }

  export type ArticuloSolicitudUpdateWithWhereUniqueWithoutTipoArticuloPersonalizadoInput = {
    where: ArticuloSolicitudWhereUniqueInput
    data: XOR<ArticuloSolicitudUpdateWithoutTipoArticuloPersonalizadoInput, ArticuloSolicitudUncheckedUpdateWithoutTipoArticuloPersonalizadoInput>
  }

  export type ArticuloSolicitudUpdateManyWithWhereWithoutTipoArticuloPersonalizadoInput = {
    where: ArticuloSolicitudScalarWhereInput
    data: XOR<ArticuloSolicitudUpdateManyMutationInput, ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloPersonalizadoInput>
  }

  export type ArticuloOfertaCreateManyTipoArticuloInput = {
    id?: number
    puntoDonacionId: number
    cantidad?: number | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ArticuloPeticionCreateManyTipoArticuloInput = {
    id?: number
    peticionDonacionId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloSolicitudCreateManyTipoArticuloInput = {
    id?: number
    solicitudId: number
    tipoArticuloPersonalizadoId?: number | null
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloOfertaUpdateWithoutTipoArticuloInput = {
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    puntoDonacion?: PuntoDonacionUpdateOneRequiredWithoutArticulosNestedInput
  }

  export type ArticuloOfertaUncheckedUpdateWithoutTipoArticuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    puntoDonacionId?: IntFieldUpdateOperationsInput | number
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloOfertaUncheckedUpdateManyWithoutTipoArticuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    puntoDonacionId?: IntFieldUpdateOperationsInput | number
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloPeticionUpdateWithoutTipoArticuloInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    peticionDonacion?: PeticionDonacionUpdateOneRequiredWithoutArticulosNestedInput
  }

  export type ArticuloPeticionUncheckedUpdateWithoutTipoArticuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    peticionDonacionId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloPeticionUncheckedUpdateManyWithoutTipoArticuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    peticionDonacionId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitudUpdateWithoutTipoArticuloInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitud?: SolicitudUpdateOneRequiredWithoutArticulosNestedInput
    tipoArticuloPersonalizado?: TipoArticuloPersonalizadoUpdateOneWithoutArticuloSolicitudNestedInput
  }

  export type ArticuloSolicitudUncheckedUpdateWithoutTipoArticuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    solicitudId?: IntFieldUpdateOperationsInput | number
    tipoArticuloPersonalizadoId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    solicitudId?: IntFieldUpdateOperationsInput | number
    tipoArticuloPersonalizadoId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloOfertaCreateManyPuntoDonacionInput = {
    id?: number
    tipoArticuloId: number
    cantidad?: number | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ArticuloOfertaUpdateWithoutPuntoDonacionInput = {
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoArticulo?: TipoArticuloUpdateOneRequiredWithoutArticulosOfertaNestedInput
  }

  export type ArticuloOfertaUncheckedUpdateWithoutPuntoDonacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloOfertaUncheckedUpdateManyWithoutPuntoDonacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitudCreateManySolicitudInput = {
    id?: number
    tipoArticuloId?: number | null
    tipoArticuloPersonalizadoId?: number | null
    cantidad: number
    creadoEn?: Date | string
  }

  export type TipoArticuloPersonalizadoCreateManySolicitudInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
  }

  export type ArticuloSolicitudUpdateWithoutSolicitudInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoArticulo?: TipoArticuloUpdateOneWithoutArticulosSolicitudNestedInput
    tipoArticuloPersonalizado?: TipoArticuloPersonalizadoUpdateOneWithoutArticuloSolicitudNestedInput
  }

  export type ArticuloSolicitudUncheckedUpdateWithoutSolicitudInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: NullableIntFieldUpdateOperationsInput | number | null
    tipoArticuloPersonalizadoId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitudUncheckedUpdateManyWithoutSolicitudInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: NullableIntFieldUpdateOperationsInput | number | null
    tipoArticuloPersonalizadoId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoArticuloPersonalizadoUpdateWithoutSolicitudInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    ArticuloSolicitud?: ArticuloSolicitudUpdateManyWithoutTipoArticuloPersonalizadoNestedInput
  }

  export type TipoArticuloPersonalizadoUncheckedUpdateWithoutSolicitudInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    ArticuloSolicitud?: ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloPersonalizadoNestedInput
  }

  export type TipoArticuloPersonalizadoUncheckedUpdateManyWithoutSolicitudInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloPeticionCreateManyPeticionDonacionInput = {
    id?: number
    tipoArticuloId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloPeticionUpdateWithoutPeticionDonacionInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoArticulo?: TipoArticuloUpdateOneRequiredWithoutArticulosPeticionNestedInput
  }

  export type ArticuloPeticionUncheckedUpdateWithoutPeticionDonacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloPeticionUncheckedUpdateManyWithoutPeticionDonacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitudCreateManyTipoArticuloPersonalizadoInput = {
    id?: number
    solicitudId: number
    tipoArticuloId?: number | null
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloSolicitudUpdateWithoutTipoArticuloPersonalizadoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitud?: SolicitudUpdateOneRequiredWithoutArticulosNestedInput
    tipoArticulo?: TipoArticuloUpdateOneWithoutArticulosSolicitudNestedInput
  }

  export type ArticuloSolicitudUncheckedUpdateWithoutTipoArticuloPersonalizadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    solicitudId?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloPersonalizadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    solicitudId?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}